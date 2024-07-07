import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ICountryConfig, PassportInputComponent } from '../../../ngx-passport-input/src/lib';

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

  onCountryChange(country: any) {
    console.log(country);
  }

  passportOutput(passport: any) {
    console.log(passport);
  }
}
