package com.ifisolution.shopcar.dao;
import com.ifisolution.shopcar.model.Customer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerDAOImpl implements CustomerDAO{
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public boolean saveCustomer(Customer customer) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().save(customer);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public List<Customer> getCustomers() {
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Customer> query = currentSession.createQuery("SELECT u  FROM Customer u", Customer.class);
        List<Customer> list = query.getResultList();
        return list;
    }

    @Override
    public boolean deleteCustomer(Customer customer) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().delete(customer);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public List<Customer> getCustomerByID(Customer customer) {
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Customer> query = currentSession.createQuery("SELECT u FROM Customer u WHERE u.customer_id=:customer_id", Customer.class);
        query.setParameter("customer_id", customer.getCustomer_id());
        List<Customer> list = query.getResultList();
        return list;
    }

    @Override
    public boolean updateCustomer(Customer customer) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().update(customer);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }
}
