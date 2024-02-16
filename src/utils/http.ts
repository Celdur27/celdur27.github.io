import { QueryClient } from '@tanstack/query-core';
import { parseCountriesData, parseCountryDetailsData } from './parsers';
import { CountryDetailsType } from './types';

const BASE_URL = 'https://restcountries.com/v3.1';

export const queryClient = new QueryClient();

export async function getListOfCountries(region: string) {
  let option = 'all';

  if (region) {
    option = `region/${region}`;
  }

  const response = await fetch(
    `${BASE_URL}/${option}?fields=name,flags,population,capital,region,cca3`,
  );

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the countries.');
    throw error;
  }

  const data = parseCountriesData(await response.json());

  return data;
}

export async function getCountryDetails(name: string | undefined) {
  const response = await fetch(`${BASE_URL}/name/${name}`);

  if (!response.ok) {
    const error = new Error(
      'An error occurred while fetching country details.',
    );
    throw error;
  }

  const data = parseCountryDetailsData((await response.json())[0]);

  const countriesList = await getListOfCountries('');

  const borders = data.borderCountries.map((border) => {
    const borderCountryName = countriesList.find(
      (country) => country.code === border,
    )?.name;

    if (!borderCountryName) {
      return '';
    }
    return borderCountryName;
  });

  const countryDetails: CountryDetailsType = {
    ...data,
    borderCountries: borders,
  };

  return countryDetails;
}
