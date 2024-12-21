import { ToastService } from './../../../core/services/toast.service';
import { LoaderService } from './../../../core/services/loader.service';
import { PostService } from './../../../core/services/post.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

import { PostItemComponent } from "./post-item/post-item.component";
import { PostI } from '../../../core/interfaces/post';
import { EmptyBoxComponent } from "../../../shared/components/empty-box/empty-box.component";
import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    RouterModule,
    InputTextModule,
    IconField,
    InputIcon,
    PostItemComponent,
    EmptyBoxComponent,
    PaginatorModule,
    NgxPaginationModule

  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  posts!: PostI[];

  postService = inject(PostService);
  loaderService = inject(LoaderService);
  toastService=inject(ToastService)
  page = 1;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loaderService.setAppLoading(true);
    this.postService.getPosts().subscribe({
      next: (res) => {

        this.posts = res;
        this.loaderService.setAppLoading(false);

      },
      error: (err) => {
        console.log(err);
        this.loaderService.setAppLoading(false);
        console.log(err);
        this.toastService.showErrorToast('something wrong happened , please try again later')
        


      }
    })
  }

}
