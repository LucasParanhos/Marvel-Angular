import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    redirectTo: 'listar',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HeroesListComponent, HeroesDetailComponent],
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HeroesModule { }
