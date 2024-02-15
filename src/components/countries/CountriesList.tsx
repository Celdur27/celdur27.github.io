/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { CountriesType, getListOfCountries } from '../../utils/http';
import CountryCard from './CountryCard';

import classes from './CountriesList.module.scss';
import CountriesFilters from './CountriesFilters';

export default function CountriesList(): JSX.Element {
  const [region, setRegion] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [searchCountry, setSearchCountry] = useState<string>('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countries', { region: region }],
    queryFn: () => getListOfCountries(region),
  });

  const handleChangeRegion = (region: string) => {
    setRegion(region);
  };

  const handleSearchChange = (text: string) => {
    setSearchCountry(text);
  };

  const handleSortByChange = (sort: string) => {
    setSortBy(sort);
  };

  const countries = data
    ? data.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase()),
      )
    : [];

  if (sortBy && countries) {
    countries.sort((a, b) =>
      a[sortBy as keyof CountriesType] > b[sortBy as keyof CountriesType]
        ? 1
        : b[sortBy as keyof CountriesType] > a[sortBy as keyof CountriesType]
          ? -1
          : 0,
    );
  }

  console.log(isError, error);
  console.log(isLoading);

  return (
    <div className={classes.countries}>
      <CountriesFilters
        region={region}
        searchText={searchCountry}
        sort={sortBy}
        onRegionChange={handleChangeRegion}
        onSearchTextChange={handleSearchChange}
        onSortChange={handleSortByChange}
      />
      <div className={classes['countries-content']}>
        {countries.map((country: CountriesType) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}
