package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DeviceRepo
 */
@Repository
public interface DeviceRepo extends JpaRepository<Device,Integer> {

    /**
     *
     * @param name Name of the unit
     * @return Boolean true or false depend on the database
     */
    Boolean existsByDeviceName(String name);

    /**
     * Find one by device name
     * @param name Name of the unit
     * @return The Device record by device name
     */
    Device findByDeviceName(String name);
}
