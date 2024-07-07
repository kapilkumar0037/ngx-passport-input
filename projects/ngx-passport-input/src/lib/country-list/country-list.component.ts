import { Component, ElementRef, computed, input, model, output, signal, viewChild } from '@angular/core';
import { IConfig, ICountryWithPassportRegex } from '../helpers/models/general.models';
import { getAllowedCountries, getCountriesBasedOnSearch, getFilteredCountries, getPreferredCountries } from '../helpers/country.helper';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-country-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
  host: {
    '(document:click)': 'onDocumentClick()',
  },
})
export class CountryListComponent {
  search = viewChild<ElementRef>('search');
  dropdownList = viewChild<ElementRef>('dropdownList');
  readonly searchText = model('');

  readonly standardCountries = computed(() =>
    getFilteredCountries(
      this.countriesExpectBlocked(),
      this.preferredCountryCodes()
    )
  );

  readonly filteredCountries = computed(() =>
    getCountriesBasedOnSearch(this.standardCountries(), this.searchText())
  );

  readonly selectedCountry = signal<ICountryWithPassportRegex | null>(null);

  readonly displayList = signal(false);

  readonly displaySearch = signal(false);

  readonly focusedIndex = signal(0);

  readonly selectedCountryCode = input<string | undefined>('');

  readonly preferredCountryCodes = input<string[]>([]);

  readonly allowedCountryCodes = input<string[]>([]);

  readonly blockedCountryCodes = input<string[]>([]);

  readonly selectedCountryConfig = input<IConfig>({});

  readonly countryListConfig = input<IConfig>({});

  readonly countryList = computed(() =>
    getAllowedCountries(this.allowedCountryCodes())
  );

  readonly countriesExpectBlocked = computed(() =>
    getFilteredCountries(this.countryList(), this.blockedCountryCodes())
  );

  readonly preferredCountryList = computed(() => {
    const result = getPreferredCountries(
      this.countriesExpectBlocked(),
      this.preferredCountryCodes()
    );
    return getCountriesBasedOnSearch(result, this.searchText());
  });

  readonly onCountryChange = output<ICountryWithPassportRegex>();

  ngOnInit(): void {
    const selectedCountryCode = this.selectedCountryCode();
    if (selectedCountryCode) {
      const country = this.countriesExpectBlocked().find(
        x => x.code === selectedCountryCode.toUpperCase()
      );

      if (country) {
        this.selectedCountry.set(country);
        this.onCountryChange.emit(country);
      } 
    } else {
      this.selectedCountry.set(this.countriesExpectBlocked()[0]);
      this.onCountryChange.emit(this.countriesExpectBlocked()[0]);
    }
  }

  changeCountry(country: ICountryWithPassportRegex): void {
    this.selectedCountry.set(country);
    this.displayList.set(false);
    this.onCountryChange.emit(country);
    this.displaySearch.set(false);
    this.searchText.set('');
    this.scrollToFocusedItem();
  }

  toggleList(): void {
    this.displayList.update(isDisplayed => !isDisplayed);
    if (this.displayList() === true) {
      this.displaySearch.set(true);
      this.setFocusedIndex();
      this.scrollToFocusedItem();
      setTimeout(() => {
        this.search()?.nativeElement.focus();
      }, 10);
    }
  }

  onDocumentClick(): void {
    this.displayList.set(false);
    this.displaySearch.set(false);
    this.searchText.set('');
  }

  onKeydown(event: KeyboardEvent) {
    const filteredCountriesLength =
      this.preferredCountryList().length + this.filteredCountries().length;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex.set(
        (this.focusedIndex() + 1) % filteredCountriesLength
      );
      this.scrollToFocusedItem();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex.set(
        (this.focusedIndex() - 1 + filteredCountriesLength) %
          filteredCountriesLength
      );
      this.scrollToFocusedItem();
    } else if (event.key === 'Enter' && this.focusedIndex() !== -1) {
      event.preventDefault();
      this.changeCountry(
        [...this.preferredCountryList(), ...this.filteredCountries()][
          this.focusedIndex()
        ]
      );
    }
  }

  scrollToFocusedItem() {
    if (this.focusedIndex() >= 0 && this.dropdownList()) {
      const dropdownElement = this.dropdownList()?.nativeElement;
      const focusedItemElement = dropdownElement.children[this.focusedIndex()];
      const listItemOffsetTop = focusedItemElement.offsetTop;
      const listItemOffsetHeight = focusedItemElement.offsetHeight;
      const dropdownScrollTop = dropdownElement.scrollTop;
      const dropdownOffsetHeight = dropdownElement.offsetHeight;

      if (listItemOffsetTop < dropdownScrollTop) {
        dropdownElement.scrollTop = listItemOffsetTop;
      } else if (
        listItemOffsetTop + listItemOffsetHeight >
        dropdownScrollTop + dropdownOffsetHeight
      ) {
        dropdownElement.scrollTop =
          listItemOffsetTop +
          listItemOffsetHeight -
          (dropdownOffsetHeight - 40);
      }
    }
  }

  onSearchTextChange() {
    this.focusedIndex.set(0);
  }

  setFocusedIndex() {
    if (this.selectedCountry()) {
      const selectedIndex = [
        ...this.preferredCountryList(),
        ...this.filteredCountries(),
      ].findIndex(country => country.code === this.selectedCountry()?.code);
      this.focusedIndex.set(selectedIndex);
    }
  }
}
