package com.ifisolution.shopcar.service;

import java.util.List;

import com.ifisolution.shopcar.dao.CustomerDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ifisolution.shopcar.model.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerDAO customerDAO;
	
	@Override
    public boolean saveCustomer(Customer customer) {
        return customerDAO.saveCustomer(customer);
    }

    @Override
    public List<Customer> getCustomers() {
        return customerDAO.getCustomers();
    }

    @Override
    public boolean deleteCustomer(Customer customer) {
        return customerDAO.deleteCustomer(customer);
    }

    @Override
    public List<Customer> getCustomerByID(Customer customer) {
        return customerDAO.getCustomerByID(customer);
    }

    @Override
    public boolean updateCustomer(Customer customer) {
        return customerDAO.updateCustomer(customer);
    }
	
}
