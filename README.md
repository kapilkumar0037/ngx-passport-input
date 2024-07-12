# ngx-passport-input

Ngx-passport-input provides an input field component for passport number and have a countries dropdown list with flags associated with input field as a prefix. User can select a specific country and passport validation for that country will have to be satisfied. The country list can be customised based on configuration options to fit various needs and use cases. 

## Demo

## Getting started

Hope you already have an angular project, if not please create one using the below commands

```
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open
```

once the angular application setup is ready, install the Ngx Countries dropdown using the following command

## Installation
```
npm i ngx-passport-input
```
## Import ngx-passport-input styles
   Either import the CSS directly to styles.scss file

   ```
   @import  "node_modules/ngx-passport-input/assets/styles.css";
   ```

   Or, add CSS file in angular.json in the styles array in the build section

   ```
    "styles": [
              "node_modules/ngx-passport-input/assets/styles.css",
              "src/styles.scss"
            ],
   ```
## Add the component selector

```
<lib-passport-input [countryConfig]="countryConfig" (passportOutput)="passportOutput($event)"/>

```
## Configure country dropdown list
Below configurations are available for configuring countries dropdown list. Below model needs to be used for configurations

### Model
```
export interface ICountryConfig {
    blockedCountryCodes?: string[];
    selectedCountryCode?: string;
    selectedCountryConfig?: IConfig;
    countryListConfig?: IConfig
    allowedCountryCodes?: string[];
}
export interface IConfig {
    hideFlag?: boolean;
    hideCode?: boolean;
    hideDialCode?: boolean;
  }

```
### Configuration options
<table role="table">
 <tbody><tr>
  <td>Configuration</td>
  <td>Value and usage</td>
 </tr>
<tr>
  <td><b>blockedCountryCodes</b></td>
  <td>It will accept an array of country codes which should not be displayed in country list. Ex. ['af','us']</td>
 </tr>
<tr>
  <td><b>allowedCountryCodes</b></td>
  <td>It will accept an array of country codes which are allowed to display in country list. Ex. ['af','us']</td>
 </tr>
 <tr>
  <td><b>selectedCountryCode</b></td>
  <td>It will accept a country code string which needs to be the default country. Ex. 'in'</td>
 </tr>
  <tr>
  <td><b>selectedCountryConfig</b></td>
  <td>It will accept an ICountry object. Ex. if code needs to be hidded {hideCode: true}</td>
 </tr>
    <td><b>countryListConfig</b></td>
  <td>It will accept an ICountry object for country list. Ex. if country code needs to be hidded in the list {hideCode: true}</td>
 </tr>
</tbody></table>

## Passport validation configuration for non supported countries
By default for non supported countries validation is there where user needs to enter at least 5 characters or number. This validation is configurable and you can pass your own regex to validate non supported countries.
Component supports an input property  <b> regexForUnsupportedCountries</b> of type 
```
 export interface IDefaultRegex {
    regex: any;
    placeholder: string;
 }
```

## Output
The below output will be returned when user will enter the passport number
```
export interface IValidatedValue {
    value: string;
    isValid: boolean;
    countryCode: string;
}
```

## License
MIT
