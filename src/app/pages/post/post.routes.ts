import { Routes } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";

export const postRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component:PostsComponent },
]