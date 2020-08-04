package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.DeviceNeed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceNeedRepo extends JpaRepository<DeviceNeed,Integer> {
}
