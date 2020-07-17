import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../model/car.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private carService: CarService) {
  }

  car: Car = new Car();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  carsaveform = new FormGroup({
    car_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    car_price: new FormControl('', [Validators.required,]),
    description: new FormControl()
  });

  saveCar(saveCar) {
    this.car = new Car();
    this.car.car_name = this.CarName.value;
    this.car.car_price = this.CarPrice.value;
    this.car.description = this.Description.value;
    this.submitted = true;
    this.save();
  }


  save() {
    this.carService.createCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
  }

  get CarName() {
    return this.carsaveform.get('Car_name');
  }

  get CarPrice() {
    return this.carsaveform.get('car_price');
  }

  get Description() {
    return this.carsaveform.get('description');
  }

  addCarForm() {
    this.submitted = false;
    this.carsaveform.reset();
  }

}
