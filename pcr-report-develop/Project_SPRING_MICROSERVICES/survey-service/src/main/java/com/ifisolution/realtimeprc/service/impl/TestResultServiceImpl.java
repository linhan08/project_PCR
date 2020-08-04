package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.dto.TestResultDTO;
import com.ifisolution.realtimeprc.domain.model.TestResult;
import com.ifisolution.realtimeprc.domain.model.Unit;
import com.ifisolution.realtimeprc.exception.AppException;
import com.ifisolution.realtimeprc.exception.NotFoundException;
import com.ifisolution.realtimeprc.repository.TestResultRepo;
import com.ifisolution.realtimeprc.repository.UnitReportRepo;
import com.ifisolution.realtimeprc.service.TestResultService;
import org.hibernate.service.spi.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TestResultServiceImpl implements TestResultService {

    private Logger log = LoggerFactory.getLogger(TestResultServiceImpl.class);
    @Autowired
    private TestResultRepo testResultRepo;

    @Autowired
    UnitReportRepo unitReportRepo;


    /**
     * Check if unit report record exists or not
     *
     * @param unitReportId Id of the report by unit
     * @return True if record exists and false if not
     */
    private boolean checkIfUnitReportExists(int unitReportId) {
        if (unitReportRepo.existsByUnitReportId(unitReportId)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * save the test result report by unit report id
     *
     * @param unitReportId  id of the report by unit
     * @param testResultDTO test result data from front-end
     * @return return the record just be saved
     */
    @Override
    @Transactional
    public TestResult saveTestResultbyUnitId(int unitReportId, TestResultDTO testResultDTO) {
        if (checkIfUnitReportExists(unitReportId)) {
            System.out.println("unit report existed");
            TestResult testResult = new TestResult();
            testResult.setNumberOfTestAtUnit(testResultDTO.getNumberOfTestAtUnit());
            testResult.setNumberOfTestFrom21(testResultDTO.getNumberOfTestFrom21());
            testResult.setNumberOfTestIncoming(testResultDTO.getNumberOfTestIncoming());
            testResult.setNumberOfTestPerDay(testResultDTO.getNumberOfTestPerDay());
            testResult.setPlaceTestMoving(testResultDTO.getPlaceTestMoving());
            testResult.setNumberOfTestMoving(testResultDTO.getNumberOfTestMoving());
            testResult.setUnitReportId(unitReportId);
            try {
                log.info("Start saving the test result with unit report id = " + unitReportId);
                TestResult savedTestResult = testResultRepo.save(testResult);
                log.info("End saving the test result with unit report id = " + unitReportId);
                return savedTestResult;
            } catch (DataAccessException e) {
                throw new ServiceException("DataAccessException found: " + e.getMessage());
            }
        } else {
            throw new NotFoundException("no unit report existed with id " + unitReportId);
        }
    }
}

