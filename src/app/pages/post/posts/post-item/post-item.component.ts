import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [
    CardModule,
    AvatarModule,
    DatePipe
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  card=input.required<any>()
}
