import { Component, OnInit, ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import * as $ from 'jquery';
import { DynamicDeviceComponent } from '../surveys/dynamic-device/dynamic-device.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
@Injectable()
export class PostsComponent implements OnInit {

  submitted = false;

  rootViewContainer:any;
  constructor(public viewContainerRef: ViewContainerRef, private factoryResolver: ComponentFactoryResolver) { }
  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }
  public addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(DynamicDeviceComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
  add(){
    this.setRootViewContainerRef(this.viewContainerRef);
    this.addDynamicComponent()
  }

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

  // addSurveyForm() {
  //   this.submitted = false;
  //   this.surveysaveform.reset();
  // }

  
}

