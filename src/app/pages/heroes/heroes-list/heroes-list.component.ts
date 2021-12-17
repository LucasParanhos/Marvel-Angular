import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

import { HeroModel } from 'src/app/models';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  model: HeroModel[] = [];
  offset = 0;
  limit = 10;
  totalPages = 0;

  heroName = '';
  hasResults = false;

  constructor(public api: HeroesService) {
    this.queryPage();
  }

  queryPage(): void {
    let params = new HttpParams()
      .set('offset', this.offset)
      .set('limit', this.limit);
    if (this.heroName) {
      params = params.set('name', this.heroName);
    }
    this.api.heroesApi.query(params).subscribe((result) => {
      this.model = result.data.results;
      this.hasResults = result.data.count > 0;
      this.totalPages = Math.floor(result.data.total / this.limit);
    });
  }

  searchHero(searchChange: Event): void {
    this.heroName = (searchChange.target as HTMLInputElement).value;
    this.queryPage();
  }
}
