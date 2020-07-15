package com.ifisolution.shopcar.dao;

import com.ifisolution.shopcar.model.Customer;

import java.util.List;

public interface CustomerDAO {
    public boolean saveCustomer(Customer customer);

    public List<Customer> getCustomers();

    public boolean deleteCustomer(Customer car);

    public List<Customer> getCustomerByID(Customer car);

    public boolean updateCustomer(Customer car);
}
