import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CacheStore } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries:    Country[] = [];
  public isLoading:    boolean = false;
  public initialValue: string = '';

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCountries.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountries.term;

  }

  searchByCountry(term:string):void {
    this.isLoading = true;
    this.CountriesService.searchCounrty(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
    // console.log(term)
  }
}
