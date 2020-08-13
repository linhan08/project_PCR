package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.dto.EmployeeResultDTO;
import com.ifisolution.realtimeprc.domain.dto.TestResultDTO;
import com.ifisolution.realtimeprc.domain.model.EmployeeResult;
import com.ifisolution.realtimeprc.domain.model.TestResult;

/**
 * EmployeeResultSerivce
 */
public interface EmployeeResultService {
    /**
     * save the test result report by unit report id
     * @param unitReportId id of the report by unit
     * @param employeeResultDTO the employeeResult record need to be insert
     * @return return the record just be saved
     */
    EmployeeResult saveEmployeeResultByUnitReportID(int unitReportId, EmployeeResultDTO employeeResultDTO);
}
