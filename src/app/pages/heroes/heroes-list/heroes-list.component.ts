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

  constructor(public api: HeroesService) {
    this.queryPage();
  }

  queryPage(): void {
    const params = new HttpParams()
      .set('offset', this.offset)
      .set('limit', this.limit);
    this.api.heroesApi.query(params).subscribe((result) => {
      this.model = result.data.results;
      console.log(this.model);
    });
  }
}
