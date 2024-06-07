import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/location'; // housinglist.json > json-server --watch housinglist.json
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const housingLocationList = await data.json() ?? [];
    return housingLocationList.map((housingLocation: HousingLocation) => {
      return {
        ...housingLocation,
        photo: `${this.baseUrl}/${housingLocation.photo}`
      };
    });
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    console.log(id);
    const data = await fetch(`${this.url}/${id}`);
    const housingLocation = await data.json() ?? {};
    return {
      ...housingLocation,
      photo: `${this.baseUrl}/${housingLocation.photo}`
    };
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}
