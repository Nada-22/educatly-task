import { PostService } from './../../../../core/services/post.service';
import { DatePipe, SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { PostI } from '../../../../core/interfaces/post';
import { MaxLengthPipe } from '../../../../shared/pipes/maxlength.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [
    CardModule,
    AvatarModule,
    DatePipe,
    SlicePipe,
    MaxLengthPipe,
    RouterModule
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  post = input.required<PostI>();
  PostService = inject(PostService);

  storePostItem() {

  }
}
