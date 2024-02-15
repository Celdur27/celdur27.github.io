import { QueryClient } from '@tanstack/query-core';

import { v4 as uuidv4 } from 'uuid';

const BASE_URL = 'https://restcountries.com/v3.1';

export const queryClient = new QueryClient();

type HttpCountriesType = {
  capital: string[];
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: {
      ell: {
        official: string;
        common: string;
      };
      tur: {
        official: string;
        common: string;
      };
      official: string;
    };
  };
  population: number;
  region: string;
};

export type CountriesType = {
  name: string;
  population: number;
  region: string;
  capital: string;
  id: string;
  flag: {
    png: string;
    alt: string;
  };
};

function parseCountriesData(countries: HttpCountriesType[]): CountriesType[] {
  return countries.map((country) => {
    return {
      id: uuidv4(),
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital[0],
      flag: {
        png: country.flags.png,
        alt: country.flags.alt,
      },
    };
  });
}

export async function getListOfCountries() {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,capital,region`,
  );

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the countries.');
    throw error;
  }

  const data = parseCountriesData(await response.json());

  return data;
}
