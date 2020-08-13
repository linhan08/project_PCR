package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.UnitReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * UnitReport Repository
 */
@Repository
public interface UnitReportRepo extends JpaRepository<UnitReport,Integer> {
    /**
     * Check if unit report exists
     * @param unitReportId The id of the unit report
     * @return True if record exists and false if not
     */
    Boolean existsByUnitReportId(int unitReportId);
}
