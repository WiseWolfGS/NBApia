import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nbafree',
  imports: [CommonModule, RouterModule],
  templateUrl: './nbafree.component.html',
  styleUrls: ['./nbafree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NBAFreeComponent {

}
