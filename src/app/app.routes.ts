import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NBANewsComponent } from './pages/NBA-News/nbanews.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'news', component: NBANewsComponent }, // ✅ 여기 추가!
    ]
  }
];
