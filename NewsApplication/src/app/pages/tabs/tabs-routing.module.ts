import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'homepage',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepagePageModule)
                    }
                ]
            },
            {
                path: 'business',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../business/business.module').then(m => m.BusinessPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../business-details/business-details.module').then(m => m.BusinessDetailsPageModule)
                    }
                ]
            },
            {
                path: 'sports',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../sports/sports.module').then(m => m.SportsPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../sports-details/sports-details.module').then(m => m.SportsDetailsPageModule)
                    }
                ]
            },
            {
                path: 'finance',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../finance/finance.module').then(m => m.FinancePageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../finance-details/finance-details.module').then(m => m.FinanceDetailsPageModule)
                    }
                ]
            }
        ]
    },
    {
        path:'',
        redirectTo: '/tabs/homepage',
        pathMatch:  'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
