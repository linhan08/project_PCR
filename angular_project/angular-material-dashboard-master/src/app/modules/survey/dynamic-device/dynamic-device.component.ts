import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-device',
  templateUrl: './dynamic-device.component.html',
  styleUrls: ['./dynamic-device.component.scss']
})
export class DynamicDeviceComponent implements OnInit {

  @Output('removeDevice') removeDevice1 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeDevice() {
    this.removeDevice1.emit(-1);
  }

}
