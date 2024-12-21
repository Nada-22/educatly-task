import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Router } from '@angular/router';
import { PostI } from '../../../../core/interfaces/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {

  PostService = inject(PostService);

post:PostI;
  constructor(private router: Router) {

    console.log(history.state.postItem);
    
    this.post = history.state.postItem;
  }
  ngOnInit(): void {


   this.PostService.postItem$.subscribe(res=>{
      console.log(res);
      
    })
    
  }

  
}
