import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-postdetail',
  imports: [CommonModule],
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent {

}
