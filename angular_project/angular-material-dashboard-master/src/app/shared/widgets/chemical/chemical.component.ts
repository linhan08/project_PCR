import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Chemical } from 'src/app/modules/auth/model/chemical.model';
import { ChemicalsService } from 'src/app/modules/service/chemical/chemicals.service';

@Component({
  selector: 'app-widget-chemical',
  templateUrl: './chemical.component.html',
  styleUrls: ['./chemical.component.scss']
})
export class ChemicalComponent implements OnInit {

  dtOptionsChemical: DataTables.Settings = {};
  dtTriggerChemical: Subject<any> = new Subject();

  chemicalsArray: any[] = [];
  chemicals: Observable<Chemical[]>;
  chemical: Chemical = new Chemical();
  deleteMessage = false;
  chemicallist: any;

  constructor(private chemicalservice: ChemicalsService) { }

  ngOnInit() {
    this.dtOptionsChemical = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.chemicalservice.chemicalViews().subscribe(data => {
      this.chemicals = data;
      this.dtTriggerChemical.next();
    });
  }
  chemicalupdateform = new FormGroup({
    chemicalName: new FormControl(),
    totalChemical: new FormControl(),
    totalChemicalUsed: new FormControl(),
  });

  get ChemicalName() {
    return this.chemicalupdateform.get('chemicalName');
  }

  get TotalChemical() {
    return this.chemicalupdateform.get('totalChemical');
  }

  get TotalChemicalUsed() {
    return this.chemicalupdateform.get('totalChemicalUsed');
  }

}

