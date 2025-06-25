import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { NBANewsComponent } from './pages/NBA-News/nbanews.component';
import { NBAFreeComponent } from './pages/NBA-Free/nbafree.component';
import { NBAAnalysisComponent } from './pages/NBA-Analysis/nbaanalysis.component';
import { DailyHumorComponent } from './pages/Daily-Humor/dailyhumor.component';
import { NotificationComponent } from './pages/Notification/notification.component';
import { PostDetailComponent } from './pages/Post-Detail/postdetail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NBANewsComponent },
  { path: 'free', component: NBAFreeComponent },
  { path: 'analysis', component: NBAAnalysisComponent },
  { path: 'dailyhumor', component: DailyHumorComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'post/:id', component: PostDetailComponent }
];
