import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empModel: Employee = new Employee();

  constructor(private empService: EmployeeService, private router: Router, private activeRoute: ActivatedRoute) {
    this.empService.getEmployeeById(this.activeRoute.snapshot.params.id).subscribe(data => {
      this.empModel = data;
    }, err => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

  submitForm() {
    if (this.activeRoute.snapshot.params.id) {
      this.empService.updateEmployee(this.activeRoute.snapshot.params.id, this.empModel).subscribe(data => {
        this.router.navigateByUrl('/list-employee');
      }, err => {
        console.log(err);
      });
    } else {
      this.empService.addEmployee(this.empModel).subscribe(data => {
        this.router.navigateByUrl('/list-employee');
      }, err => {
        console.log(err);
      });
    }
  }

}

