import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ICountryConfig, PassportInputComponent } from '../../../ngx-passport-input/src/lib';
import { IDefaultRegex } from '../../../ngx-passport-input/src/lib/helpers/models/general.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PassportInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'sandbox';
  countryConfig: ICountryConfig = {
    selectedCountryCode: '',
  }
  regexForUnsupportedCountries: IDefaultRegex = {regex: /^[A-Z0-9]{12}$/, placeholder: 'A1234567B'};

  onCountryChange(country: any) {
    console.log(country);
  }

  passportOutput(passport: any) {
    console.log(passport);
  }
}
