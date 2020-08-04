import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @Output() panelOpenStateForMe: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  // panelOpenState() {
  //   this.panelOpenStateForMe.emit();
  //   setTimeout(() => {
  //     window.dispatchEvent(
  //       new Event('resize')
  //     );
  //   }, 300);
  // }
}
