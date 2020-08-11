import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SurveyInfo } from '../models/model/survey-info.model';

@Component({
  selector: 'app-dynamic-device',
  templateUrl: './dynamic-device.component.html',
  styleUrls: ['./dynamic-device.component.scss']
})
export class DynamicDeviceComponent implements OnInit {
  surveyInfo: SurveyInfo = new SurveyInfo();
  @Output('removeDevice') removeDevice1 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeDevice() {
    this.removeDevice1.emit(-1);
  }

}
