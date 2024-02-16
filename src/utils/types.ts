export type HttpCountriesType = {
  capital: string[];
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  cca3: string;
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
  code: string;
  flag: {
    png: string;
    alt: string;
  };
};

export type HttpCountryDetailsType = {
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
    };
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders?: string[];
};

export type CountryDetailsType = {
  flag: {
    png: string;
    alt: string;
  };
  name: string;
  officialName: string;
  population: number;
  region: string;
  capital: string;
  subregion: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borderCountries: string[];
};
