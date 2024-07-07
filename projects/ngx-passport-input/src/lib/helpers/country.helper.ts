import { COUNTRIES_LIST } from "./country-constants";
import { ICountryWithPassportRegex } from "./models/general.models";


export const getAllowedCountries = (
  allowedCountryCodes: string[]
): ICountryWithPassportRegex[] => {
  if (allowedCountryCodes.length > 0) {
    return COUNTRIES_LIST.filter(x =>
      allowedCountryCodes.includes(x.code?.toLowerCase()!)
    );
  }

  return COUNTRIES_LIST;
};

export const getPreferredCountries = (
  countriesToFilter: ICountryWithPassportRegex[],
  preferredCountryCodes: string[]
): ICountryWithPassportRegex[] => {
  if (preferredCountryCodes.length > 0) {
    return countriesToFilter.filter(x =>
      preferredCountryCodes.includes(x.code?.toLowerCase()!)
    );
  }

  return [];
};

export const getFilteredCountries = (
  countriesToFilter: ICountryWithPassportRegex[],
  countryCodes: string[]
) => {
  if (countryCodes.length > 0) {
    return countriesToFilter.filter(
      x => !countryCodes.includes(x.code?.toLowerCase()!)
    );
  }
  return countriesToFilter;
};

export const getCountriesBasedOnSearch = (
  countriesToSearch: ICountryWithPassportRegex[],
  searchText: string
) => {
  return countriesToSearch.filter(
    x =>
      x.name?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
      x.dialling_code?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};
