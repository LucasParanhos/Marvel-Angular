import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


const routes: Routes = [
  {
    path: ':id/detail',
    component: HeroesDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: HeroesListComponent,
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HeroesListComponent, HeroesDetailComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
