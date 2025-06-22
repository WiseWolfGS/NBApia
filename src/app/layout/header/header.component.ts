import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule],  // routerLink 사용을 위해 추가
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = false;
  darkModeEnabled = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}