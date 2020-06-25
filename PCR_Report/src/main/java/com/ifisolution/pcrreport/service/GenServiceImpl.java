package com.ifisolution.pcrreport.service;

import com.ifisolution.pcrreport.dao.RepositoryConfig;
import com.ifisolution.pcrreport.entities.Chemical;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenServiceImpl extends GeneService {
    @Autowired
    private RepositoryConfig repositoryConfig;

    @Override
    public Iterable<Chemical> findAll() {
        return repositoryConfig.findAll();
    }

    @Override
    public List<Chemical> search(String term) {
        return repositoryConfig.findByNameContaining(term);
    }

    @Override
    public Chemical findById(Integer id) {
        return repositoryConfig.findById(id).get();
    }

    @Override
    public void save(Chemical chemical) {
        repositoryConfig.save(chemical);
    }

    @Override
    public void delete(Integer id) {
        Chemical chemical = repositoryConfig.findById(id).get();
        repositoryConfig.delete(chemical);
    }
}
