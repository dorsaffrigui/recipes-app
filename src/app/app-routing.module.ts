import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lazy load routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'recipes',
    loadComponent: () => import('./recipes/recipes.component').then(m => m.RecipesComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
