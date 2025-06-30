import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  showMenu = false;
  darkModeEnabled = false;
  onDarkModeChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.darkModeEnabled = target.checked;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
