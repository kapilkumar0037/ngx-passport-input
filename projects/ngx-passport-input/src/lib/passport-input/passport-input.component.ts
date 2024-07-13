import { Component, OnInit, computed, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassportValidatorHelperService } from '../passport-validator/src/passport-validator-helper.service';
import { CountryListComponent } from '../country-list/country-list.component';
import { ICountryWithPassportRegex, IValidatedValue, ICountryConfig, IPassportConfig } from '../helpers/models/general.models';

@Component({
  selector: 'lib-passport-input',
  standalone: true,
  imports: [FormsModule, CountryListComponent],
  templateUrl: './passport-input.component.html',
  styleUrl: './passport-input.component.scss',
  providers: [PassportValidatorHelperService]
})
export class PassportInputComponent implements OnInit {

  readonly passportInput = model('');
  passportOutput = output<IValidatedValue>();
  isRequired = signal<boolean | undefined>(true);
  readonly defaultPassportConfig: IPassportConfig = {
    regexForUnsupportedCountries: { regex: /^(?=.*[A-Z])(?=.*\d).{5,}$/, placeholder: 'A12345' },
    isRequired: true
  }
  readonly countryConfig = input<ICountryConfig>({});
  readonly passportConfig = input<IPassportConfig>(this.defaultPassportConfig);

  readonly blockedCountryCodes = computed(() => {
    return this.countryConfig().blockedCountryCodes ?? [];
  });
  readonly selectedCountryCode = computed(() => {
    return this.countryConfig().selectedCountryCode ?? '';
  });
  readonly selectedCountryConfig = computed(() => {
    return this.countryConfig().selectedCountryConfig ?? {};
  });
  readonly countryListConfig = computed(() => {
    return this.countryConfig().countryListConfig ?? {};
  });
  readonly allowedCountryCodes = computed(() => {
    return this.countryConfig().allowedCountryCodes ?? [];
  });

  readonly placeholder = signal<string | undefined>('');
  readonly selectedCountry = signal<ICountryWithPassportRegex | null>(null);

  ngOnInit(): void {
    if(this.passportConfig().isRequired !== undefined){
      this.isRequired.set(this.passportConfig().isRequired);   
    }
  }

  onCountryChange(country: ICountryWithPassportRegex) {
    if (country?.placeholder) {
      this.placeholder.set(country.placeholder ? country.placeholder : '');
    } else {
      if (this.passportConfig().regexForUnsupportedCountries?.placeholder) {
        this.placeholder.set(this.passportConfig()?.regexForUnsupportedCountries?.placeholder)
      } else {
        this.placeholder.set(this.defaultPassportConfig?.regexForUnsupportedCountries?.placeholder)
      }
      country.passportRegex = this.passportConfig().regexForUnsupportedCountries?.regex;
    }
    this.selectedCountry.set(country);
  }

  onPassportNumberChange(isValid: boolean) {
    this.passportOutput.emit({ value: this.passportInput(), isValid: isValid, countryCode: this.selectedCountry()?.code ?? '' });
  }
}
