import { v4 as uuidv4 } from 'uuid';
import {
  CountriesType,
  CountryDetailsType,
  HttpCountriesType,
  HttpCountryDetailsType,
} from './types';

export function parseCountriesData(
  countries: HttpCountriesType[],
): CountriesType[] {
  return countries.map((country) => {
    return {
      id: uuidv4(),
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital[0],
      code: country.cca3,
      flag: {
        png: country.flags.png,
        alt: country.flags.alt,
      },
    };
  });
}

export function parseCountryDetailsData(
  country: HttpCountryDetailsType,
): CountryDetailsType {
  const parsedCountry: CountryDetailsType = {
    name: country.name.common,
    officialName: country.name.official,
    population: country.population,
    region: country.region,
    capital: country.capital[0],
    flag: {
      png: country.flags.png,
      alt: country.flags.alt,
    },
    subregion: country.subregion,
    topLevelDomain: country.tld[0],
    currencies: [],
    languages: [],
    borderCountries: country.borders ? country.borders : [],
  };

  for (const key in country.currencies) {
    parsedCountry.currencies.push(country.currencies[key].name);
  }

  for (const key in country.languages) {
    parsedCountry.languages.push(country.languages[key]);
  }

  return parsedCountry;
}
