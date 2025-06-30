import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NBANewsComponent } from './pages/nba-news/nba-news.component';
import { NBAFreeComponent } from './pages/nba-free/nba-free.component';
import { NBAAnalysisComponent } from './pages/nba-analysis/nba-analysis.component';
import { DailyHumorComponent } from './pages/daily-humor/daily-humor.component';
import { NotificationComponent } from './pages/notification/notification.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children:[
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'nba-news',
                component: NBANewsComponent,
            },
            {
                path: 'nba-free',
                component: NBAFreeComponent,
            },
            {
                path: 'nba-analysis',
                component: NBAAnalysisComponent,
            },
            {
                path: 'daily-humor',
                component: DailyHumorComponent,
            },
            {
                path: 'notification',
                component: NotificationComponent,
            },
            {
            path: 'post/:id',
            loadComponent: () =>
                import('./pages/post-detail/post-detail.component').then(m => m.PostDetailComponent),
            }
        ]
    }
];
