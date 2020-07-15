package com.ifisolution.shopcar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ifisolution.shopcar.model.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerService customerService;
	
	@Override
    public boolean saveCustomer(Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @Override
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @Override
    public boolean deleteCustomer(Customer customer) {
        return customerService.deleteCustomer(customer);
    }

    @Override
    public List<Customer> getCustomerByID(Customer customer) {
        return customerService.getCustomerByID(customer);
    }

    @Override
    public boolean updateCustomer(Customer customer) {
        return customerService.updateCustomer(customer);
    }
	
}
