import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as $ from 'jquery';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   @Input() yes : Boolean;
   durationInSeconds = 1;
  constructor(private _snackBar: MatSnackBar) { }
  ngOnInit() {
    $(function() {
      $(".expand").on( "click", function() {
        $(this).next().slideToggle(200);
        const $expand = $(this).find(">:first-child");
        
        if($expand.text() == "rotate-icon") {
          $expand.text("rotate-icon");
        } 
      });
    });
  }
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
export class PizzaPartyComponent {}
