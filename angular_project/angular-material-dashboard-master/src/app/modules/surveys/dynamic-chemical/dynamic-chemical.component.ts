import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-chemical',
  templateUrl: './dynamic-chemical.component.html',
  styleUrls: ['./dynamic-chemical.component.scss']
})
export class DynamicChemicalComponent implements OnInit {

  @Output('removeSkill') removeSkill = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeSkills() {
    this.removeSkill.emit(-1);
  }

}
