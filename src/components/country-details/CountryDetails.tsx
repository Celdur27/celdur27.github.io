import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getCountryDetails } from '../../utils/http';

import { UIContext } from '../../store/ui-context';

import classes from './CountryDetails.module.scss';
import { Link } from 'react-router-dom';
import Loader from '../ui/Loader';
import ErrorBox from '../ui/ErrorBox';

export default function CountryDetails(): JSX.Element {
  const { name } = useParams<string>();
  const uiCtx = useContext(UIContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['country', { name: name }],
    queryFn: () => getCountryDetails(name),
  });

  const isBordersDisplayed = data && data.borderCountries.length > 0;

  return (
    <div className={classes['country-details']}>
      <Link
        to="/countries-api"
        className={`${classes['country-details-button']} ${uiCtx.isLightTheme ? classes['country-details-button--light'] : classes['country-details-button--dark']}`}
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back</span>
      </Link>
      {isLoading && <Loader />}
      {isError && <ErrorBox title={error.name} message={error.message} />}
      {data && (
        <div className={classes['country-details-card']}>
          <img
            src={data.flag.png}
            alt={data.flag.alt}
            className={classes['country-details-image']}
          />
          <div className={classes['country-details-content']}>
            <h1 className={classes['country-details-name']}>{data.name}</h1>
            <div className={classes['country-details-content-info']}>
              <div className={classes['country-details-content-info-panel']}>
                <p className={classes['country-details-paragraph']}>
                  <span>Official Name: </span>
                  {data.officialName}
                </p>
                <p className={classes['country-details-paragraph']}>
                  <span>Population: </span>
                  {data.population.toLocaleString('en-US')}
                </p>
                <p className={classes['country-details-paragraph']}>
                  <span>Region: </span>
                  {data.region}
                </p>
                <p className={classes['country-details-paragraph']}>
                  <span>Sub Region: </span>
                  {data.subregion}
                </p>
                <p className={classes['country-details-paragraph']}>
                  <span>Capital: </span>
                  {data.capital}
                </p>
              </div>
              <div className={classes['country-details-content-info-panel']}>
                <p className={classes['country-details-paragraph']}>
                  <span>Top Level Domain: </span>
                  {data.topLevelDomain}
                </p>
                <p className={classes['country-details-paragraph']}>
                  <span>Currencies: </span>
                  {data.currencies.join(', ')}
                </p>
                <p className={classes['country-details-paragraph']}>
                  <span>Languages: </span>
                  {data.languages.join(', ')}
                </p>
              </div>
            </div>
            {isBordersDisplayed && (
              <div className={classes['country-details-borders']}>
                <span>Border Countries: </span>
                <div className={classes['country-details-borders-list']}>
                  {data.borderCountries.map((border) => (
                    <Link
                      key={border}
                      to={`/countries-api/${border}`}
                      className={`${classes['country-details-border']} ${uiCtx.isLightTheme ? classes['country-details-border--light'] : classes['country-details-border--dark']}`}
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
