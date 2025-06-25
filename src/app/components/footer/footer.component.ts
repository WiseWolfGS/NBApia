import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="bg-gray-100 text-center text-sm text-gray-600 py-4">
    ⓒ 2025 NBApia. All rights reserved.
  </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
