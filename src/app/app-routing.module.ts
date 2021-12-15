import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesModule } from './pages/heroes/heroes.module';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: '',
    redirectTo: 'heroes',
  },
  {
    path: '*',
    redirectTo: 'heroes',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
