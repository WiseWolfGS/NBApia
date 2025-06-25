import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // ✅ 라우트 불러오기

export function bootstrapApp() {
  return bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });
}