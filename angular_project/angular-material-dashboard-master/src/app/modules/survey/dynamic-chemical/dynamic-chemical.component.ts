import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SurveyInfo } from '../models/model/survey-info.model';

@Component({
  selector: 'app-dynamic-chemical',
  templateUrl: './dynamic-chemical.component.html',
  styleUrls: ['./dynamic-chemical.component.scss']
})
export class DynamicChemicalComponent implements OnInit {

  @Output('removeChemical') removeChemicals = new EventEmitter();


  surveyInfo: SurveyInfo = new SurveyInfo();
  constructor() { }

  ngOnInit() {
  }

  
  removeChemical() {
    this.removeChemicals.emit(-1);
  }

}
