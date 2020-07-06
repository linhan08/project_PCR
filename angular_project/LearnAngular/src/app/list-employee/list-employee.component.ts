import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  listEmployee = [];

  constructor(private EmployeeService: EmployeeService) {
    this.EmployeeService.getAllEmployee().subscribe(data => {
      this.listEmployee = data;
      console.log(this.listEmployee);
    }, err => {

    });
    console.log('aa');
   }

  ngOnInit(): void {
  }

}
