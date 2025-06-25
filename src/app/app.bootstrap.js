// src/app/app.bootstrap.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router'; // 너의 appConfig에 맞게 수정
export function bootstrapApp() {
    return bootstrapApplication(AppComponent, {
        providers: [provideRouter([])]
    });
}
