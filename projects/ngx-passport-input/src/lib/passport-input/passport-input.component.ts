import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, effect, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassportValidatorHelperService } from '../passport-validator/src/passport-validator-helper.service';
import { CountryListComponent } from '../country-list/country-list.component';
import { IConfig, ICountryWithPassportRegex, IValidatedValue, ICountryConfig } from '../helpers/models/general.models';

@Component({
  selector: 'lib-passport-input',
  standalone: true,
  imports: [FormsModule, CountryListComponent],
  templateUrl: './passport-input.component.html',
  styleUrl: './passport-input.component.scss',
  providers: [PassportValidatorHelperService]
})
export class PassportInputComponent {

  readonly passportInput = model('');
  passportOutput = output<IValidatedValue>();
  readonly countryConfig = input<ICountryConfig>({});

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


  readonly placeholder = signal('');
  readonly selectedCountry = signal<ICountryWithPassportRegex | null>(null)

  onCountryChange(country: ICountryWithPassportRegex) {
    if (country?.placeholder) {
      this.placeholder.set(country.placeholder ? country.placeholder : '');
    } else {
      this.placeholder.set("A12345");
      country.passportRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/
    }
    this.selectedCountry.set(country);
  }

  onPassportNumberChange(isValid: boolean) {
    this.passportOutput.emit({ value: this.passportInput(), isValid: isValid });
  }
}
