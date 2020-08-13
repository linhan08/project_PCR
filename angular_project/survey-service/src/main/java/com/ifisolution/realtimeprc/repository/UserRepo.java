package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    /**
     * Find user by userName
     * @param userName Username of user
     * @return User by name
     */
    User findByUserName(String userName);
}
