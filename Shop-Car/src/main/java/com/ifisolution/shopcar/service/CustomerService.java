package com.ifisolution.shopcar.service;

import java.util.List;

import com.ifisolution.shopcar.model.Customer;

public interface CustomerService {
	
	public boolean saveCustomer(Customer customer);

    public List<Customer> getCustomers();

    public boolean deleteCustomer(Customer customer);

    public List<Customer> getCustomerByID(Customer customer);

    public boolean updateCustomer(Customer customer);
}
