package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.Chemical;
import com.ifisolution.realtimeprc.domain.model.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DeviceRepo
 */
@Repository
public interface ChemicalRepo extends JpaRepository<Chemical,Integer> {

    /**
     *
     * @param name Name of the unit
     * @return Boolean true or false depend on the database
     */
    Boolean existsByChemicalName(String name);

    /**
     * Find one by device name
     * @param name Name of the unit
     * @return The Chemical record by device name
     */
    Chemical findByChemicalName(String name);
}
