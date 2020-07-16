import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../model/car.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private carservice: CarService) {
  }

  car: Car = new Car();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  carsaveform = new FormGroup({
    car_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    car_price: new FormControl('', [Validators.required,]),
    desc: new FormControl()
  });

  saveCar(saveCar) {
    this.car = new Car();
    this.car.car_name = this.CarName.value;
    this.car.car_price = this.CarPrice.value;
    this.car.desc = this.Desc.value;
    this.submitted = true;
    this.save();
  }


  save() {
    this.carservice.createCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
  }

  get CarName() {
    return this.carsaveform.get('Car_name');
  }

  get CarPrice() {
    return this.carsaveform.get('car_price');
  }

  get Desc() {
    return this.carsaveform.get('desc');
  }

  addCarForm() {
    this.submitted = false;
    this.carsaveform.reset();
  }
}
