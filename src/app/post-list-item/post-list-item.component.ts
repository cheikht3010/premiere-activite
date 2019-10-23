import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getContent() {
    return this.postContent;
  }

  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    }
  }

  onLoveIt() {
    this.postLoveIts = this.postLoveIts + 1;
  }

  onDontLoveIt() {
    this.postLoveIts = this.postLoveIts - 1;
  }

}
