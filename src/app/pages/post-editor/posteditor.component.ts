// postform.component.ts
import { Component } from '@angular/core';
import { QuillEditorComponent } from '../../components/quill-editor.component';

@Component({
  selector: 'app-postedit-form',
  standalone: true,
  imports: [QuillEditorComponent],
  template: `
    <h2 class="text-xl font-bold mb-4">📝 글쓰기</h2>
    <app-quill-editor></app-quill-editor>
  `,
})
export class PostEditorComponent {}
