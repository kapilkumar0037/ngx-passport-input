import { Injectable } from '@angular/core';
import { COUNTRIES_LIST } from '../../helpers/country-constants';

@Injectable()
export class PassportValidatorHelperService {

  constructor() { }

  getCountries(){
    return COUNTRIES_LIST;
  }
}
