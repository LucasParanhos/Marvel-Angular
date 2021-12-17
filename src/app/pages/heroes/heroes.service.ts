import { Injectable } from '@angular/core';

import { HeroesApiService } from 'src/app/api';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(public heroesApi: HeroesApiService) {}
}
