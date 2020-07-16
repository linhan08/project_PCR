package com.ifisolution.shopcar.controller;
import java.util.List;

import com.ifisolution.shopcar.model.Car;
import com.ifisolution.shopcar.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/car")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping("save-car")
    public boolean saveCar(@RequestBody Car car) {
        return carService.saveCar(car);
    }

    @GetMapping("cars-list")
    public List<Car> allcars() {
        return carService.getCars();
    }

    @DeleteMapping("delete-car/{car_id}")
    public boolean deleteCar(@PathVariable("car_id") int car_id, Car car) {
        car.setCar_id(car_id);
        return carService.deleteCar(car);
    }

    @GetMapping("car/{car_id}")
    public List<Car> allcarByID(@PathVariable("car_id") int car_id, Car car) {
        car.setCar_id(car_id);
        return carService.getCarByID(car);
    }

    @PostMapping("update-car/{car_id}")
    public boolean updateCar(@RequestBody Car car, @PathVariable("car_id") int car_id) {
        car.setCar_id(car_id);
        return carService.updateCar(car);
    }
}
