import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);
  postId: string | null = null;

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
    });
  }
}
