import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../representations/post';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor(private postService: PostService) {}
  posts: Post[] = [];
  ngOnInit(): void {
    this.postService.getPosts().subscribe(res=>{
      this.posts=res
    })
  }
}
