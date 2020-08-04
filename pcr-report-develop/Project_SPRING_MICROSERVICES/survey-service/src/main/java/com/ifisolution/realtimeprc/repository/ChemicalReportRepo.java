package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.ChemicalReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ChemicalReportRepo
 */
@Repository
public interface ChemicalReportRepo extends JpaRepository<ChemicalReport,Integer> {

}
