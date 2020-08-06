import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-device',
  templateUrl: './dynamic-device.component.html',
  styleUrls: ['./dynamic-device.component.scss']
})
export class DynamicDeviceComponent implements OnInit {

  reference: any;
  index: number;

  selectedSkill: string;
  yearsOfExperiences: string = '0';
  selectedRating: string;

  skills: any = [];
  ratings: any = [];
  constructor(private elementRef: ElementRef) { }
  
  removeSkills() {
    this.reference.destroy();
  }

  ngOnInit() {
  }

}
