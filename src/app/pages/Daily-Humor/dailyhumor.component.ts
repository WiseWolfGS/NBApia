import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dailyhumor',
  imports: [CommonModule],
  templateUrl: './dailyhumor.component.html',
  styleUrls: ['./dailyhumor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyHumorComponent {

}
