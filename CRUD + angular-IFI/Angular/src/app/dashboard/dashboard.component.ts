import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../model/student';
import {Observable, Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  constructor(private studentservice: StudentService, private token: TokenStorageService) {
  }

  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  students: Observable<Student[]>;
  student: Student = new Student();
  deleteMessage = false;
  studentlist: any;
  isupdated = false;


  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.studentservice.getStudentList().subscribe(data => {
      this.students = data;
      this.dtTrigger.next();
    })
  }

  deleteStudent(id: number) {
    this.studentservice.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.studentservice.getStudentList().subscribe(data => {
            this.students = data
          })
        },
        error => console.log(error));
  }


  updateStudent(id: number) {
    this.studentservice.getStudent(id)
      .subscribe(
        data => {
          this.studentlist = data
        },
        error => console.log(error));
  }

  studentupdateform = new FormGroup({
    student_id: new FormControl(),
    student_name: new FormControl(),
    student_email: new FormControl(),
    student_branch: new FormControl()
  });

  updateStu(updstu) {
    this.student = new Student();
    this.student.student_id = this.StudentId.value;
    this.student.student_name = this.StudentName.value;
    this.student.student_email = this.StudentEmail.value;
    this.student.student_branch = this.StudentBranch.value;
    console.log(this.StudentBranch.value);
    
    this.studentservice.updateStudent(this.student.student_id, this.student).subscribe(
      data => {
        this.isupdated = true;
        this.studentservice.getStudentList().subscribe(data => {
          this.students = data
        })
      },
      error => console.log(error));
  }

  get StudentName() {
    return this.studentupdateform.get('student_name');
  }

  get StudentEmail() {
    return this.studentupdateform.get('student_email');
  }

  get StudentBranch() {
    return this.studentupdateform.get('student_branch');
  }

  get StudentId() {
    return this.studentupdateform.get('student_id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }

}
