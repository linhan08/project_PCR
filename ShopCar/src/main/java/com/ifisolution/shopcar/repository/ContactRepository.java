package com.ifisolution.shopcar.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ifisolution.shopcar.model.Contact;


@Repository
public interface ContactRepository extends CrudRepository<Contact, Integer> {
	List<Contact> findByNameContaining(String term);
}
