package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.dto.ChemicalDTO;
import com.ifisolution.realtimeprc.domain.dto.DeviceDTO;
import com.ifisolution.realtimeprc.domain.model.ChemicalReport;
import com.ifisolution.realtimeprc.domain.model.DeviceReport;

import java.util.List;

/**
 * ChemicalReportService
 */
public interface ChemicalReportService {
    /**
     * Save list device report into database
     * @param dtoList List of device report
     * @param unitReportId Id of unit report
     * @return Saved list of device report
     */
    List<ChemicalReport> saveListChemicalReport(List<ChemicalDTO> dtoList, int unitReportId);
}
