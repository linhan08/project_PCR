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
    this.employeeservice.getEmployeeList().subscribe(data => {
      this.employees = data;
      this.dtTriggerEmployee.next();
    })
  }
  employeeupdateform = new FormGroup({
    employee_number_doing_test: new FormControl(),
    employee_number_using_PCR: new FormControl(),
    employee_number_incoming: new FormControl(),
  });

  get EmployeeNumberDoingTest() {
    return this.employeeupdateform.get('employee_number_doing_test');
  }

  get EmployeeNumberUsingPCR() {
    return this.employeeupdateform.get('employee_number_using_PCR');
  }

  get EmployeeNumberIncoming() {
    return this.employeeupdateform.get('employee_number_incoming');
  }


}
