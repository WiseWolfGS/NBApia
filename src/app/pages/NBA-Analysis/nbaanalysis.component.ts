import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-nbaanalysis',
  imports: [CommonModule],
  templateUrl: './nbaanalysis.component.html',
  styleUrls: ['./nbaanalysis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NBAAnalysisComponent {

}
