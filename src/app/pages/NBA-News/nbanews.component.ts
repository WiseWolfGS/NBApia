import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-nbanews',
  imports: [CommonModule],
  templateUrl: './nbanews.component.html',
  styleUrls: ['./nbanews.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NBANewsComponent {}
