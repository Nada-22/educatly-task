import { Routes } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { PostDetailsComponent } from "./posts/post-details/post-details.component";

export const postRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component:PostsComponent },
    { path: ':id', component:PostDetailsComponent },
]