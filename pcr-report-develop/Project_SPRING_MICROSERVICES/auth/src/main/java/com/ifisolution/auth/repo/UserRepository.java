package com.ifisolution.auth.repo;

import com.ifisolution.auth.entity.AppUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<AppUser, Integer> {
    Boolean existsByUsername(String username);
}
