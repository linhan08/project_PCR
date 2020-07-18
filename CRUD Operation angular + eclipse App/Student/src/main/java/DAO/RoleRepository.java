package DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import Model.ERole;
import Model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
