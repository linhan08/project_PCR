package com.ifisolution.auth.repo;

import com.ifisolution.auth.domain.enums.RoleName;
import com.ifisolution.auth.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Roles,Integer> {
    Optional<Roles> findByRoleName(final String roleName);
}
