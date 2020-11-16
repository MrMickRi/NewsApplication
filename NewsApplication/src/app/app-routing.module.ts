import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./pages/business-details/business-details.module').then( m => m.BusinessDetailsPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./pages/sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'sports-details',
    loadChildren: () => import('./pages/sports-details/sports-details.module').then( m => m.SportsDetailsPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'finance-details',
    loadChildren: () => import('./pages/finance-details/finance-details.module').then( m => m.FinanceDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
