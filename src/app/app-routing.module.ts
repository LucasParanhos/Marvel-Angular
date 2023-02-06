import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/heroes/heroes.module').then((m) => m.HeroesModule).catch( err => console.log('Oh no!', err)),
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
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
