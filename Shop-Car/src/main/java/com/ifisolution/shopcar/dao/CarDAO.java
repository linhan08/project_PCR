package com.ifisolution.shopcar.dao;

import com.ifisolution.shopcar.model.Car;

import java.util.List;

public interface CarDAO {
    public boolean saveCar(Car car);

    public List<Car> getCars();

    public boolean deleteCar(Car car);

    public List<Car> getCarByID(Car car);

    public boolean updateCar(Car car);
}
