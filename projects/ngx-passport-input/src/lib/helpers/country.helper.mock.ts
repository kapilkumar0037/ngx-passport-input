import { ICountryWithPassportRegex } from './models/general.models';

export const countriesMock = (): ICountryWithPassportRegex[] => {
  return [
    {
      name: 'Canada',
      code: 'CA',      
      dialling_code: '+1',
    },
  ];
};
