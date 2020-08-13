package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Unit Repository
 */
@Repository
public interface UnitRepo extends JpaRepository<Unit, Integer> {
    /**
     *
     * @param name Name of the unit
     * @return Boolean true or false depend on the database
     */
    Boolean existsByUnitName(String name);

    /**
     *
     * @param name Name of the unit
     * @return Selected Unit found by name
     */
    Unit findByUnitName(String name);
}
