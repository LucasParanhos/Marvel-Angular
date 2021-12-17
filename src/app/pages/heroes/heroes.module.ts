import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'

import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: HeroesListComponent,
  },
  {
    path: ':id/detail',
    component: HeroesDetailComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HeroesListComponent, HeroesDetailComponent],
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
  ]
})
export class HeroesModule { }
