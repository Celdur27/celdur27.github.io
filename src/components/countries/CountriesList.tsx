/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getListOfCountries } from '../../utils/http';
import { CountriesType } from '../../utils/types';
import CountryCard from './CountryCard';

import classes from './CountriesList.module.scss';
import CountriesFilters from './CountriesFilters';
import Loader from '../ui/Loader';
import ErrorBox from '../ui/ErrorBox';

export default function CountriesList(): JSX.Element {
  const [region, setRegion] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [searchCountry, setSearchCountry] = useState<string>('');
  const [debouncedSearchCountry, setDebouncedSearchCountry] =
    useState<string>('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countries', { region: region }],
    queryFn: () => getListOfCountries(region),
  });

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setDebouncedSearchCountry(searchCountry);
    }, 500);

    return () => clearTimeout(delayTimeout);
  }, [searchCountry, 500]);

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
        country.name
          .toLowerCase()
          .includes(debouncedSearchCountry.toLowerCase()),
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
      {isLoading && <Loader />}
      {isError && <ErrorBox title={error.name} message={error.message} />}
      {!isLoading && !isError && countries.length === 0 && (
        <h3>We could not find any countries with these filters.</h3>
      )}
      {!isLoading && !isError && (
        <div className={classes['countries-content']}>
          {countries.map((country: CountriesType) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
