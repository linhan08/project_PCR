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

  constructor(private statusservice: StatusService) { }

  ngOnInit() {
    this.dtOptionsTest = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    // this.statusservice.getStudentList().subscribe(data => {
    //   this.status_tests = data;
    //   this.dtTriggerTest.next();
    // })
  }
  statusupdateform = new FormGroup({
    test_number_execute_at_unit: new FormControl(),
    test_number_each_day: new FormControl(),
    test_number_incoming: new FormControl(),
  });

  get TestNumberExecuteAtUnit() {
    return this.statusupdateform.get('test_number_execute_at_unit');
  }

  get TestNumberEachDay() {
    return this.statusupdateform.get('test_number_each_day');
  }

  get TestNumberIncoming() {
    return this.statusupdateform.get('test_number_incoming');
  }

}
