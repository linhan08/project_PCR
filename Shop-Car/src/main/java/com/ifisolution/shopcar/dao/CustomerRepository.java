package com.ifisolution.shopcar.dao;


import org.springframework.data.repository.CrudRepository;
import com.ifisolution.shopcar.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer>{
}
