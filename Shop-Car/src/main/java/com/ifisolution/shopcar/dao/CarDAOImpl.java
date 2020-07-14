package com.ifisolution.shopcar.dao;

import com.ifisolution.shopcar.model.Car;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CarDAOImpl implements CarDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public boolean saveCar(Car car) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().save(car);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public List<Car> getCars() {
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Car> query = currentSession.createQuery("SELECT u  FROM Car u", Car.class);
        List<Car> list = query.getResultList();
        return list;
    }

    @Override
    public boolean deleteCar(Car car) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().delete(car);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public List<Car> getCarByID(Car car) {
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Car> query = currentSession.createQuery("SELECT u FROM Car u WHERE u.car_id=:car_id", Car.class);
        query.setParameter("car_id", car.getCar_id());
        List<Car> list = query.getResultList();
        return list;
    }

    @Override
    public boolean updateCar(Car car) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().update(car);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }
}
