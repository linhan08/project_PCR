package com.ifisolution.shopcar.service;

import com.ifisolution.shopcar.model.Car;

import java.util.List;

public interface CarService {
    public boolean saveCar(Car car);

    public List<Car> getCars();

    public boolean deleteCar(Car car);

    public List<Car> getCarByID(Car car);

    public boolean updateCar(Car car);
}
