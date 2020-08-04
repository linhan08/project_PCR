package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.dto.TestResultDTO;
import com.ifisolution.realtimeprc.domain.model.TestResult;

/**
 * Test Results service interface
 */
public interface TestResultService {
    /**
     * save the test result report by unit report id
     * @param unitReportId id of the report by unit
     * @param testResult the test result record need to be insert
     * @return return the record just be saved
     */
    TestResult saveTestResultbyUnitId(int unitReportId, TestResultDTO testResult);
}
