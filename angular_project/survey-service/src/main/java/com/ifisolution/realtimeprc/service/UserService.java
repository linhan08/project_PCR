package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.model.User;

/**
 * UserService
 */
public interface UserService {
    /**
     *
     * @param userName
     * @return
     */
    User findByUserName(String userName);
}
