import { renderApplication } from '@angular/platform-server';
export default async function render() {
    return await renderApplication(() => import('./app/app.bootstrap').then(m => m.bootstrapApp()), {
        document: '<!doctype html><html><body><app-root></app-root></body></html>'
    });
}
