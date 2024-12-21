import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'post',
                pathMatch: 'full'
            
            },
            {
                path: 'post',
                loadChildren: () => import('./pages/post/post.routes').then(m => m.postRoutes),
            },
            {
                path:'**', component:NotFoundComponent
            }
        ]
    }
];
