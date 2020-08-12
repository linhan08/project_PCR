import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Status_test } from 'src/app/modules/auth/model/status_test.model';
import { StatusService } from 'src/app/modules/service/test_status/status.service';
@Component({
  selector: 'app-widget-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  dtOptionsTest: DataTables.Settings = {};
  dtTriggerTest: Subject<any> = new Subject();

  status_testsArray: any[] = [];
  status_tests: Observable<Status_test[]>;
  status_test: Status_test = new Status_test();
  deleteMessage = false;
  status_testlist: any;

  listTest = [];

  constructor(private statusservice: StatusService) {
    this.statusservice.testReportviews().subscribe(data=>{
      this.listTest = data;
    },error=>{});
  }

  ngOnInit() {
    this.dtOptionsTest = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };

  }
  statusupdateform = new FormGroup({
    totalTest: new FormControl(),
    totalTestEachDay: new FormControl(),
    totalTestExcute: new FormControl(),
    totalNumberIncoming: new FormControl(),
  });

  get TotalTest() {
    return this.statusupdateform.get('totalTest');
  }

  get TotalTestEachDay() {
    return this.statusupdateform.get('totalTestEachDay');
  }

  get TotalTestExcute() {
    return this.statusupdateform.get('totalTestExcute');
  }
  get TotalNumberIncoming() {
    return this.statusupdateform.get('totalNumberIncoming');
  }

}
