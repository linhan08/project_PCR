import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-device1',
  templateUrl: './dynamic-device1.component.html',
  styleUrls: ['./dynamic-device1.component.scss']
})
export class DynamicDevice1Component implements OnInit {

  @Output('removeDevice1') removeDevice2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeDevice1() {
    this.removeDevice2.emit(-1);
  }

}
