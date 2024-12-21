import { DatePipe, SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { PostI } from '../../../../core/interfaces/post';
import { MaxLengthPipe } from '../../../../shared/pipes/maxlength.pipe';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [
    CardModule,
    AvatarModule,
    DatePipe,
    SlicePipe,
    MaxLengthPipe
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  post = input.required<PostI>()
}
