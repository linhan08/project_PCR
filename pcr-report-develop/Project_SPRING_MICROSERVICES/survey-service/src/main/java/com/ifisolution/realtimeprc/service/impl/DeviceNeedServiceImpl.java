package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.dto.DeviceNeedDTO;
import com.ifisolution.realtimeprc.domain.model.DeviceNeed;
import com.ifisolution.realtimeprc.domain.model.EmployeeResult;
import com.ifisolution.realtimeprc.exception.NotFoundException;
import com.ifisolution.realtimeprc.repository.DeviceNeedRepo;
import com.ifisolution.realtimeprc.repository.UnitReportRepo;
import com.ifisolution.realtimeprc.service.DeviceNeedService;
import org.hibernate.service.spi.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

/**
 * DeviceNeedServiceImpl
 */
@Service
public class DeviceNeedServiceImpl implements DeviceNeedService {

    /**
     * Logger
     */
    private Logger log = LoggerFactory.getLogger(TestResultServiceImpl.class);
    /**
     * DeviceNeedRepo
     */
    @Autowired
    private DeviceNeedRepo deviceNeedRepo;
    /**
     * UnitReportRepo
     */
    @Autowired
    private UnitReportRepo unitReportRepo;

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
     * Save device need record to database
     *
     * @param unitReportId  Id of unit Report
     * @param deviceNeedDTO deviceNeed data from front-end
     * @return Device need record
     */
    @Override
    public DeviceNeed saveDeviceNeed(int unitReportId, DeviceNeedDTO deviceNeedDTO) {
        if (checkIfUnitReportExists(unitReportId)) {
            System.out.println("unit report existed");
            DeviceNeed deviceNeed = new DeviceNeed();
            deviceNeed.setDeviceTypeId(deviceNeedDTO.getDeviceTypeId());
            deviceNeed.setUnitReportId(unitReportId);
            deviceNeed.setIsNeedMoreMachine(deviceNeedDTO.getIsNeedMoreMachine());
            deviceNeed.setNumberOfMachineNeed(deviceNeedDTO.getNumberOfMachineNeed());

            try {
                log.info("Start saving the device need with unit report id = " + unitReportId);
                DeviceNeed savedDeviceNeed = deviceNeedRepo.save(deviceNeed);
                log.info("End saving the device need with unit report id = " + unitReportId);
                return savedDeviceNeed;
            } catch (DataAccessException e) {

                throw new ServiceException("DataAccessException found: " + e.getMessage());
            }
        } else {
            throw new NotFoundException("no unit report existed with id " + unitReportId);
        }
    }
}
