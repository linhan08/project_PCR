package com.ifisolution.pcrreport.service;

import com.ifisolution.pcrreport.entities.Chemical;

import java.util.List;

public class GeneralService {
    Iterable<Chemical> findAll();

    List<Chemical> search(String name);

    Chemical findById(Integer id);

    void save(Chemical chemical);

    void delete(Integer id);
}
