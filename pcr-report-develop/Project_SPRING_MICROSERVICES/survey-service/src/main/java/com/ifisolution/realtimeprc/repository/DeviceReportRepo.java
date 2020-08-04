package com.ifisolution.realtimeprc.repository;

import com.ifisolution.realtimeprc.domain.model.DeviceReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DeviceReportRepo
 */
@Repository
public interface DeviceReportRepo extends JpaRepository<DeviceReport,Integer> {

}
