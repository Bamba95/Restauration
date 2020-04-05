import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./tabs/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'plats',
    loadChildren: () => import('./tabs/plats/plats.module').then( m => m.PlatsPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./tabs/compte/compte.module').then( m => m.ComptePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
