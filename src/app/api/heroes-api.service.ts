import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HeroModel } from './../models/hero.model';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesApiService extends RestApiService<HeroModel> {
  constructor(http: HttpClient) {
    super('characters', http);
  }
}
