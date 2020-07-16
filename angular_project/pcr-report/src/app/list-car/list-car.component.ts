import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import {Car} from '../model/car.model';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  constructor(private carService: CarService) {
  }

  carsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  cars: Observable<Car[]>;
  car: Car = new Car();
  deleteMessage = false;
  carlist: any;
  isupdated = false;


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.carService.getCarList().subscribe(data => {
      this.cars = data;
      this.dtTrigger.next();
    })
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.carService.getCarList().subscribe(data => {
            this.cars = data
          })
        },
        error => console.log(error));
  }


  updateCar(id: number) {
    this.carService.getCar(id)
      .subscribe(
        data => {
          this.carlist = data
        },
        error => console.log(error));
  }

  carupdateform = new FormGroup({
    car_id: new FormControl(),
    car_name: new FormControl(),
    car_price: new FormControl(),
    desc: new FormControl()
  });

  updateStu(updstu) {
    this.car = new Car();
    this.car.car_id = this.CarId.value;
    this.car.car_name = this.CarName.value;
    this.car.car_price = this.CarPrice.value;
    this.car.desc = this.Desc.value;
    console.log(this.Desc.value);


    this.carService.updateCar(this.car.car_id, this.car).subscribe(
      data => {
        this.isupdated = true;
        this.carService.getCarList().subscribe(data => {
          this.cars = data
        })
      },
      error => console.log(error));
  }

  get CarName() {
    return this.carupdateform.get('car_name');
  }

  get CarPrice() {
    return this.carupdateform.get('car_price');
  }

  get Desc() {
    return this.carupdateform.get('desc');
  }

  get CarId() {
    return this.carupdateform.get('car_id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }

}