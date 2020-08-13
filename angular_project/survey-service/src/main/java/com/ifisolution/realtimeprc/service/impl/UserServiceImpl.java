package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.model.User;
import com.ifisolution.realtimeprc.repository.UserRepo;
import com.ifisolution.realtimeprc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;
    /**
     * @param userName
     * @return
     */
    @Override
    public User findByUserName(String userName) {
        return userRepo.findByUserName(userName);
    }
}
