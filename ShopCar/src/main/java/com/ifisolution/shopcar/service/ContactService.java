package com.ifisolution.shopcar.service;

import java.util.List;

import com.ifisolution.shopcar.model.Contact;


public interface ContactService {
	Iterable<Contact> findAll();

	List<Contact> search(String name);

	Contact findById(Integer id);

	void save(Contact contact);

	void delete(Integer id);
}
