import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-chemical2',
  templateUrl: './dynamic-chemical2.component.html',
  styleUrls: ['./dynamic-chemical2.component.scss']
})
export class DynamicChemical2Component implements OnInit {

  @Output('removeChemical2') removeChemical3 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeChemical2() {
    this.removeChemical3.emit(-1);
  }

}
