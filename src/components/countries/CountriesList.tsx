/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { CountriesType, getListOfCountries } from '../../utils/http';
import CountryCard from './CountryCard';

import classes from './CountriesList.module.scss';

export default function CountriesList(): JSX.Element {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countries'],
    queryFn: getListOfCountries,
  });

  console.log(isError, error);
  console.log(isLoading, data);

  return (
    <div className={classes.countries}>
      {data &&
        data.map((country: CountriesType) => (
          <CountryCard key={country.id} country={country} />
        ))}
    </div>
  );
}
