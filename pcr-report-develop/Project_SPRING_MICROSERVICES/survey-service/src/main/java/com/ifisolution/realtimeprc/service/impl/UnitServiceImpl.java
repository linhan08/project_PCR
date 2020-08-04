package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.dto.AddressDTO;
import com.ifisolution.realtimeprc.domain.dto.UnitInfoDTO;
import com.ifisolution.realtimeprc.domain.model.Address;
import com.ifisolution.realtimeprc.domain.model.Unit;
import com.ifisolution.realtimeprc.domain.model.UnitReport;
import com.ifisolution.realtimeprc.exception.NotFoundException;
import com.ifisolution.realtimeprc.repository.AddressRepo;
import com.ifisolution.realtimeprc.repository.UnitRepo;
import com.ifisolution.realtimeprc.repository.UnitReportRepo;
import com.ifisolution.realtimeprc.service.UnitService;
import org.hibernate.service.spi.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Unit Service implementation of Unit Service interface
 */
@Service
public class UnitServiceImpl implements UnitService {
    @Autowired
    UnitRepo unitRepo;
    @Autowired
    AddressRepo addressRepo;
    @Autowired
    UnitReportRepo unitReportRepo;

    Logger log = LoggerFactory.getLogger(UnitServiceImpl.class);

    /**
     * Save unit to database
     * @param unitDTO Unit data from front-end
     * @param address address contain information of addre  ss
     */
    @Override
    @Transactional
    public UnitReport saveNewUnit(UnitInfoDTO unitDTO, AddressDTO address) {
       if(checkIfUnitExists(unitDTO.getUnitName())){
           System.out.println("unit existed");
           Unit unit = getSelectedUnit(unitDTO.getUnitName());
           saveAddress(address,unit);
           return saveUnitReport(unit,unitDTO);
       }else{
           System.out.println("unit doesn't exist");
           Unit unit1 = new Unit(unitDTO.getUnitName());
           Unit savedUnit;
           try{
               log.info("Start saving new unit with unit name = " + unitDTO.getUnitName());
               unitRepo.save(unit1);
               log.info("End saving new unit");
               savedUnit = getSelectedUnit(unitDTO.getUnitName());
               saveAddress(address,savedUnit);
               return saveUnitReport(savedUnit,unitDTO);
           }catch (DataAccessException e ){
               throw  new ServiceException("add new unit failed");
           }
       }
    }

    /**
     * Save unit report t
     * @param savedUnit
     * @param unitDTO
     */
    @Transactional
    UnitReport saveUnitReport(Unit savedUnit, UnitInfoDTO unitDTO) {
        UnitReport unitReport = new UnitReport();
        unitReport.setUnitId(savedUnit.getUnitId());
        unitReport.setEmailOfHeadOfDepartment(unitDTO.getEmail());
        unitReport.setNameOfHeadOfDepartment(unitDTO.getHeadOfApartment());
        unitReport.setIsTestExecuted(unitDTO.getIsExecutedTesting());
        unitReport.setPhoneOfHeadOfDepartment(unitDTO.getPhoneNumber());
        unitReport.setTypeOfUnit(unitDTO.getTypeOfUnit());
        try{
            log.info("Start saving unit report with unit id = " + savedUnit.getUnitId());
           unitReport =  unitReportRepo.save(unitReport);
            log.info("End saving unit report with unit id = " + savedUnit.getUnitId());
            return unitReport;
        }catch (DataAccessResourceFailureException e){
            throw new ServiceException("save new unitReport failed" + e.getMessage());
        }catch (ServiceException e ){
            throw new ServiceException("save new unitReport failed " + e.getMessage());
        }
    }

    /**
     * Save the address for the new Unit
     * @param addressDTO Data for address table from front-end
     * @param savedUnit Unit that already be saved in the database
     */
    @Transactional
    void saveAddress(AddressDTO addressDTO, Unit savedUnit) {
        try{
            Address address = new Address(savedUnit.getUnitId(),
                                          addressDTO.getAreaId(),
                                          addressDTO.getProvinceId(),
                                          addressDTO.getCountryId());
            log.info("Start saving the address of new unit with id = " + savedUnit.getUnitId());
            addressRepo.save(address);
            log.info("End saving the address of new unit with id =  " + savedUnit.getUnitId());
        }catch (DataAccessException e){
            throw new ServiceException("save adddess of new unit failed");
        }
    }

    @Override
    @Transactional
    public Unit getSelectedUnit(String unitName) {
        Unit selectedUnit;
        try{
            log.info("Start getting the selected unit by name  = " + unitName);
            selectedUnit = unitRepo.findByUnitName(unitName);
            log.info("End getting the selected unit by name = " + unitName);
            return selectedUnit;
        }catch (DataAccessException e ){
            throw new ServiceException("access fail to database");
        }catch (NotFoundException e) {
            throw new NotFoundException("cant find any thing");
        }
    }

    private boolean checkIfUnitExists(String unitName){
        if(unitRepo.existsByUnitName(unitName)){
            return true;
        }else{
            return false;
        }
    }
}
