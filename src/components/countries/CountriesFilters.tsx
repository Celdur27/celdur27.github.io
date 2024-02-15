import React, { useContext } from 'react';

import { UIContext } from '../../store/ui-context';

import classes from './CountriesFilters.module.scss';

type CountriesFiltersProps = {
  region: string;
  searchText: string;
  sort: string;
  onRegionChange: (region: string) => void;
  onSearchTextChange: (text: string) => void;
  onSortChange: (sort: string) => void;
};

export default function CountriesFilters({
  region,
  searchText,
  sort,
  onRegionChange,
  onSearchTextChange,
  onSortChange,
}: CountriesFiltersProps): JSX.Element {
  const uiCtx = useContext(UIContext);

  return (
    <div className={classes['countries-filters']}>
      <div
        className={`${classes['countries-filters-input']} ${uiCtx.isLightTheme ? classes['countries-filters-input--light'] : classes['countries-filters-input--dark']}`}
      >
        <input
          placeholder="Search for a country..."
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <select
        className={`${classes['countries-filters-select']} ${uiCtx.isLightTheme ? classes['countries-filters-select--light'] : classes['countries-filters-select--dark']}`}
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option value="" disabled selected hidden>
          Filter by Region
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="Africa"
        >
          Africa
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="America"
        >
          America
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="Asia"
        >
          Asia
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="Europe"
        >
          Europe
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="Oceania"
        >
          Oceania
        </option>
      </select>
      <select
        className={`${classes['countries-filters-select']} ${uiCtx.isLightTheme ? classes['countries-filters-select--light'] : classes['countries-filters-select--dark']}`}
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="" disabled selected hidden>
          Sort by...
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="name"
        >
          Name
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="population"
        >
          Population
        </option>
        <option
          className={classes['countries-filters-select-option']}
          value="region"
        >
          Region
        </option>
      </select>
    </div>
  );
}
