package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepo extends JpaRepository<Address,Integer> {

}
