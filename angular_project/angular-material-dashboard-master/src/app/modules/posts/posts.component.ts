import { Component, OnInit, ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
@Injectable()
export class PostsComponent implements OnInit {

  submitted = false;

  rootViewContainer:any;

  isShowChemical = false;

  numAdd = 0;

  numChemical = [];
  constructor() { }

  ngOnInit() {
    this.submitted = false;
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


  addNewSkills() {
    this.numAdd++;
    this.isShowChemical = true;
    this.numChemical.push(this.numAdd);
  }

  removeSkillFromParent(val, id) {
    if(val && val == -1) {
      this.numChemical.splice(id, 1);
    }

  }

}

