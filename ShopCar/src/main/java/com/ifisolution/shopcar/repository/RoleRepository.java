package com.ifisolution.shopcar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ifisolution.shopcar.model.ERole;
import com.ifisolution.shopcar.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}

