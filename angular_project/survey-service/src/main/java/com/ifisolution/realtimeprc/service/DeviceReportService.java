package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.dto.DeviceDTO;
import com.ifisolution.realtimeprc.domain.model.DeviceReport;

import java.util.List;

/**
 * DeviceReportService
 */
public interface DeviceReportService {
    /**
     * Save list device report into database
     * @param dtoList List of device report
     * @param unitReportId Id of unit report
     * @return Saved list of device report
     */
    List<DeviceReport> saveListDeviceReport(List<DeviceDTO> dtoList, int unitReportId);

}
