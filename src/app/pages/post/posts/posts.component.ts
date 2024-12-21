import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

import { PostItemComponent } from "./post-item/post-item.component";
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [

    RouterModule,
    InputTextModule,
    IconField,
    InputIcon,
    PostItemComponent
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  cards = [
    {
      header: 'UX review presentations',
      subheader: 'Design',
      image: 'path-to-image-1.jpg',
      description: 'How do you create compelling presentations that wow your colleagues and impress your manager?',
      link: '/design/ux-review',
    },
    {
      header: 'Migrating to Linear 101',
      subheader: 'Product',
      image: 'path-to-image-2.jpg',
      description: 'Learn basic workflow software practices, quick tips, and hacks.',
      link: '/product/migrating',
    },
    {
      header: 'Building your API Stack',
      subheader: 'Software Engineering',
      image: 'path-to-image-3.jpg',
      description: 'The tools RESTful APIs have been met by a rise in tools for modeling, testing, and building APIs.',
      link: '/software/api-stack',
    },
    {
      header: 'Building your API Stack',
      subheader: 'Software Engineering',
      image: 'path-to-image-3.jpg',
      description: 'The tools RESTful APIs have been met by a rise in tools for modeling, testing, and building APIs.',
      link: '/software/api-stack',
    },
    {
      header: 'Building your API Stack',
      subheader: 'Software Engineering',
      image: 'path-to-image-3.jpg',
      description: 'The tools RESTful APIs have been met by a rise in tools for modeling, testing, and building APIs.',
      link: '/software/api-stack',
    },
    {
      header: 'Building your API Stack',
      subheader: 'Software Engineering',
      image: 'path-to-image-3.jpg',
      description: 'The tools RESTful APIs have been met by a rise in tools for modeling, testing, and building APIs.',
      link: '/software/api-stack',
    },
  ];

}
