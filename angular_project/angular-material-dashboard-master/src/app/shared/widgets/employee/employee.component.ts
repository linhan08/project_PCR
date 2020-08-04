import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Employee } from 'src/app/modules/auth/model/Employee.model';
import { EmployeesService } from 'src/app/modules/service/employee/employees.service';
@Component({
  selector: 'app-widget-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  dtOptionsEmployee: DataTables.Settings = {};
  dtTriggerEmployee: Subject<any> = new Subject();

  employeesArray: any[] = [];
  employees: Observable<Employee[]>;
  employee: Employee = new Employee();
  deleteMessage = false;
  employeelist: any;

  constructor(private employeeservice: EmployeesService) { }

  ngOnInit() {
    this.dtOptionsEmployee = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.employeeservice.employeeResulViews().subscribe(data => {
      this.employees = data;
      this.dtTriggerEmployee.next();
    })
  }
  employeeupdateform = new FormGroup({
    totalEmployeeTest: new FormControl(),
    totalEmployeePCR: new FormControl(),
    totalEmployeeIncoming: new FormControl(),
  });

  get TotalEmployeeTest() {
    return this.employeeupdateform.get('totalEmployeeTest');
  }

  get TotalEmployeePCR() {
    return this.employeeupdateform.get('totalEmployeePCR');
  }

  get TotalEmployeeIncoming() {
    return this.employeeupdateform.get('totalEmployeeIncoming');
  }


}
