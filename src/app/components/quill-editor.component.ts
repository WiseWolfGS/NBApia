// quill-editor.component.ts
import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import 'quill'; // 타입 인식

@Component({
  selector: 'app-quill-editor',
  standalone: true,
  imports: [FormsModule, QuillModule],
  template: `
    <div class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <input 
        [(ngModel)]="title" 
        placeholder="제목을 입력하세요" 
        class="input input-bordered w-full text-lg font-semibold" 
      />

      <quill-editor 
        [(ngModel)]="content" 
        [style]="{ height: '300px' }"
        class="bg-white"
      ></quill-editor>

      <button 
        (click)="submitPost()" 
        class="btn btn-primary w-full"
      >작성 완료</button>

      <div class="text-sm text-gray-400">
        [미리보기] {{ content.substring(0, 80) }}...
      </div>
    </div>
  `,
})
export class QuillEditorComponent {
  title: string = '';
  content: string = '';

  submitPost() {
    console.log('제목:', this.title);
    console.log('내용:', this.content);
    alert('📝 임시 제출 완료! 콘솔을 확인하세요.');
  }
}