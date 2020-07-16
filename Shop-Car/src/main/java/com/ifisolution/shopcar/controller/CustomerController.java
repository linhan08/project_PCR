package com.ifisolution.shopcar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifisolution.shopcar.model.Customer;
import com.ifisolution.shopcar.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/customer")
public class CustomerController {
	@Autowired
    private CustomerService customerService;

    @PostMapping("save-customer")
    public boolean saveCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @GetMapping("customers-list")
    public List<Customer> allcustomers() {
        return customerService.getCustomers();
    }

    @DeleteMapping("delete-customer/{customer_id}")
    public boolean deleteCustomer(@PathVariable("customer_id") int customer_id, Customer customer) {
    	customer.setCustomer_id(customer_id);
        return customerService.deleteCustomer(customer);
    }

    @GetMapping("customer/{customer_id}")
    public List<Customer> allcustomerByID(@PathVariable("customer_id") int customer_id, Customer customer) {
    	customer.setCustomer_id(customer_id);
        return customerService.getCustomerByID(customer);
    }

    @PostMapping("update-customer/{customer_id}")
    public boolean updateCustomer(@RequestBody Customer customer, @PathVariable("customer_id") int customer_id) {
    	customer.setCustomer_id(customer_id);
        return customerService.updateCustomer(customer);
    }
}
