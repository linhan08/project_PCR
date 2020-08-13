package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.dto.EmployeeResultDTO;
import com.ifisolution.realtimeprc.domain.dto.TestResultDTO;
import com.ifisolution.realtimeprc.domain.model.EmployeeResult;
import com.ifisolution.realtimeprc.domain.model.TestResult;
import com.ifisolution.realtimeprc.exception.NotFoundException;
import com.ifisolution.realtimeprc.repository.EmployeeResultRepo;
import com.ifisolution.realtimeprc.repository.TestResultRepo;
import com.ifisolution.realtimeprc.repository.UnitReportRepo;
import com.ifisolution.realtimeprc.service.EmployeeResultService;
import org.hibernate.service.spi.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * EmployeeResultService implementation
 */
@Service
public class EmployeeResultServiceImpl implements EmployeeResultService {

    /**
     * Logger
     */
    private Logger log = LoggerFactory.getLogger(TestResultServiceImpl.class);
    /**
     * EmployeeResultRepo in order to save to database using JPA
     */
    @Autowired
    private EmployeeResultRepo employeeResultRepo;
    /**
     * UnitReportRepo
     */
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
     * save the employee result report by unit report id
     *
     * @param unitReportId      id of the report by unit
     * @param employeeResultDTO the employeeResult record need to be insert
     * @return return the record just be saved
     */
    @Override
    @Transactional
    public EmployeeResult saveEmployeeResultByUnitReportID(int unitReportId, EmployeeResultDTO employeeResultDTO) {
        if (checkIfUnitReportExists(unitReportId)) {
            System.out.println("unit report existed");
            EmployeeResult employeeResult = new EmployeeResult();
            employeeResult.setEmployeeTestingTrainedPlace(employeeResultDTO.getEmployeeTestTrainingPlace());
            employeeResult.setEmployeeTrainedPlace(employeeResultDTO.getTrainingPlace());
            employeeResult.setNumberOfEmployeeIncoming(employeeResultDTO.getNumberOfEmployeeIncoming());
            employeeResult.setNumberOfEmployeeDoingTest(employeeResultDTO.getNumberOfEmployeeDoTest());
            employeeResult.setNumberOfEmployeeUsingPCR(employeeResultDTO.getNumberOfEmployeeUsePRC());
            employeeResult.setUnitReportId(unitReportId);
            try {
                log.info("Start saving the employee result with unit report id = " + unitReportId);
                EmployeeResult savedEmployeeResult = employeeResultRepo.save(employeeResult);
                log.info("End saving the test result with unit report id = " + unitReportId);
                return savedEmployeeResult;
            } catch (DataAccessException e) {

                throw new ServiceException("DataAccessException found: " + e.getMessage());
            }
        } else {
            throw new NotFoundException("no unit report existed with id " + unitReportId);
        }
    }
}
