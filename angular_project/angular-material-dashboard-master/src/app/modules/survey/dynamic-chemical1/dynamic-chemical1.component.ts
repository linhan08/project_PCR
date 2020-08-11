import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { SurveyInfo } from '../models/model/survey-info.model';

@Component({
  selector: 'app-dynamic-chemical1',
  templateUrl: './dynamic-chemical1.component.html',
  styleUrls: ['./dynamic-chemical1.component.scss']
})
export class DynamicChemical1Component implements OnInit {

  @Output('removeChemical1') removeChemical2 = new EventEmitter();
  surveyInfo: SurveyInfo = new SurveyInfo();
  constructor() { }

  ngOnInit() {
  }

  removeChemical1() {
    this.removeChemical2.emit(-1);
  }

}
