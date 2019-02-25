import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private listPost: Array<Post>;
  private post1: Post;
  private post2: Post;
  private post3: Post;
  private content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas iaculis quam eget finibus. Quisque malesuada enim nec condimentum congue. Etiam iaculis pretium purus, ac rutrum metus egestas pretium. Quisque quis placerat metus, vel fringilla lectus. Mauris vitae metus vitae augue pulvinar facilisis.";
  constructor() {
    this.listPost = new Array<Post>();
    this.post1 = new Post("Mon premier post");
    this.post2 = new Post("Mon deuxieme post");
    this.post3 = new Post("Mon dernier post");
    this.listPost.push(this.post1);
    this.listPost.push(this.post2);
    this.listPost.push(this.post3);
  }
}
