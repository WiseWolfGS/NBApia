import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../safe-url.pipe';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  postId!: string;

  post = {
    title: '오늘 할리버튼 활약.jpg',
    author: '타이리스할리버튼아님',
    category: 'NBA 자유',
    time: '1시간 전',
    views: 128,
    content: [
      '오늘 할리버튼이 보여준 플레이는 전형적인 패스 퍼스트 가드의 교과서였습니다.',
      '특히 3쿼터에서 보여준 픽앤롤 판단은...',
    ],
    imageUrl: '/assets/sample.webp',
    videoUrl: 'https://www.youtube.com/embed/wNqkljr9WGs?si=FrILmq-IAc4rdtqm',
    likes: 23,
    comments: [
      {
        user: '농구의신',
        time: '2시간 전',
        text: '진짜 오늘 경기 소름이었음',
      },
      {
        user: '후프마스터',
        time: '1시간 전',
        text: '이래서 인디애나가 플레이오프 가능성 있다고 봅니다',
      },
    ],
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id')!;
      console.log('불러온 post ID:', this.postId);

      // TODO: 나중에 API로 대체
    });
  }
}
