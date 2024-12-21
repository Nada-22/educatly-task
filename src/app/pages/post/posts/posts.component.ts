import { PostService } from './../../../core/services/post.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

import { PostItemComponent } from "./post-item/post-item.component";
import { PostI } from '../../../core/interfaces/post';
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
export class PostsComponent implements OnInit {

  posts!: PostI[];

  postService = inject(PostService);


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: (res) => {

        this.posts = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
