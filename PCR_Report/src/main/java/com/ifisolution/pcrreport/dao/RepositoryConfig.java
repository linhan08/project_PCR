package com.ifisolution.pcrreport.dao;

import com.ifisolution.pcrreport.entities.Chemical;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RepositoryConfig extends CrudRepository<Chemical, Integer> {
    List<Chemical> findByNameContaining(String term);
}
