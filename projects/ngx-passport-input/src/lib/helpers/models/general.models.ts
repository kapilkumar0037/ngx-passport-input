export interface ICountryWithPassportRegex {
    code: string;
    name: string;
    dialling_code: string;
    passportRegex?: any;
    placeholder?: string;
}

export interface IConfig {
    hideFlag?: boolean;
    hideCode?: boolean;
    hideDialCode?: boolean;
  }

export interface IValidatedValue {
    value: string;
    isValid: boolean;
}

export interface ICountryConfig {
    blockedCountryCodes?: string[];
    selectedCountryCode?: string;
    selectedCountryConfig?: IConfig;
    countryListConfig?: IConfig
    allowedCountryCodes?: string[];
}