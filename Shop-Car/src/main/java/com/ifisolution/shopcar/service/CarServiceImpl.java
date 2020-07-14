package com.ifisolution.shopcar.service;


import com.ifisolution.shopcar.dao.CarDAO;
import com.ifisolution.shopcar.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Autowired
    private CarDAO carDAO;

    @Override
    public boolean saveCar(Car car) {
        return carDAO.saveCar(car);
    }

    @Override
    public List<Car> getCars() {
        return carDAO.getCars();
    }

    @Override
    public boolean deleteCar(Car car) {
        return carDAO.deleteCar(car);
    }

    @Override
    public List<Car> getCarByID(Car car) {
        return carDAO.getCarByID(car);
    }

    @Override
    public boolean updateCar(Car car) {
        return carDAO.updateCar(car);
    }
    

}
