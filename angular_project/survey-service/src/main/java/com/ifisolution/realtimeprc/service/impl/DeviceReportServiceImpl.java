package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.dto.DeviceDTO;
import com.ifisolution.realtimeprc.domain.model.Device;
import com.ifisolution.realtimeprc.domain.model.DeviceReport;
import com.ifisolution.realtimeprc.exception.NotFoundException;
import com.ifisolution.realtimeprc.repository.DeviceRepo;
import com.ifisolution.realtimeprc.repository.DeviceReportRepo;
import com.ifisolution.realtimeprc.repository.EmployeeResultRepo;
import com.ifisolution.realtimeprc.repository.UnitReportRepo;
import com.ifisolution.realtimeprc.service.DeviceReportService;
import org.hibernate.service.spi.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * DeviceReportServiceImpl
 */
@Service
@Transactional
public class DeviceReportServiceImpl implements DeviceReportService {


    /**
     * Logger
     */
    private Logger log = LoggerFactory.getLogger(DeviceReportServiceImpl.class);

    /**
     * UnitReportRepo
     */
    @Autowired
    UnitReportRepo unitReportRepo;
    /**
     * DeviceRepo
     */
    @Autowired
    DeviceRepo deviceRepo;
    /**
     * DeviceReportRepo
     */
    @Autowired
    DeviceReportRepo deviceReportRepo;


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
     * Check if device exist or not
     *
     * @param deviceName Name the device
     * @return
     */
    private boolean checkIfDeviceExists(String deviceName){
        if(deviceRepo.existsByDeviceName(deviceName)){
            return true;
        }else {
            return false;
        }
    }
    /**
     * Save list device report into database
     *
     * @param dtoList List of device report
     * @param unitReportId  Id of unit report
     * @return Saved list of device report
     */
    @Override
    public List<DeviceReport> saveListDeviceReport(List<DeviceDTO> dtoList, int unitReportId) {
        List<DeviceReport> list = new ArrayList<>();
        try{
            if(checkIfUnitReportExists(unitReportId)){
                DeviceReport deviceReport = new DeviceReport();
                dtoList.forEach(deviceDTO -> {
                    if(checkIfDeviceExists(deviceDTO.getDeviceName())){
                        Device savedDevice = deviceRepo.findByDeviceName(deviceDTO.getDeviceName());
                        deviceReport.setDeviceId(savedDevice.getDeviceId());
                        deviceReport.setUnitReportId(unitReportId);
                        deviceReport.setDevicePurpose(deviceDTO.getDevicePurpose());
                        deviceReport.setStartUsingDate(deviceDTO.getStartUsingDate());
                        deviceReport.setTestEachDay(deviceDTO.getTestEachDay());
                        deviceReport.setTestEachTime(deviceDTO.getTestEachTime());
                        deviceReport.setDeviceTypeId(deviceDTO.getDeviceTypeId());
                        deviceReport.setNote(deviceDTO.getNote());
                        deviceReportRepo.save(deviceReport);
                        list.add(deviceReport);
                    }else{
                        Device savedDevice = new Device(deviceDTO.getDeviceName());
                        savedDevice = deviceRepo.save(savedDevice);
                        deviceReport.setDeviceId(savedDevice.getDeviceId());
                        deviceReport.setUnitReportId(unitReportId);
                        deviceReport.setDevicePurpose(deviceDTO.getDevicePurpose());
                        deviceReport.setStartUsingDate(deviceDTO.getStartUsingDate());
                        deviceReport.setTestEachDay(deviceDTO.getTestEachDay());
                        deviceReport.setTestEachTime(deviceDTO.getTestEachTime());
                        deviceReport.setDeviceTypeId(deviceDTO.getDeviceTypeId());
                        deviceReport.setNote(deviceDTO.getNote());
                        deviceReportRepo.save(deviceReport);
                        list.add(deviceReport);
                    }
                });
                return list;
            }else {
                throw new ServiceException("found null");
            }
        }catch (DataAccessException e) {
            throw new ServiceException("DataAccessExcepption " + e.getMessage());
        }catch (NullPointerException e){
            throw new ServiceException("NullPointerException " + e.getMessage());
        }
    }
}
