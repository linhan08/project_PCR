package com.ifisolution.realtimeprc.service.impl;

import com.ifisolution.realtimeprc.domain.dto.ChemicalDTO;
import com.ifisolution.realtimeprc.domain.dto.DeviceDTO;
import com.ifisolution.realtimeprc.domain.model.Chemical;
import com.ifisolution.realtimeprc.domain.model.ChemicalReport;
import com.ifisolution.realtimeprc.domain.model.Device;
import com.ifisolution.realtimeprc.domain.model.DeviceReport;
import com.ifisolution.realtimeprc.repository.*;
import com.ifisolution.realtimeprc.service.ChemicalReportService;
import org.hibernate.service.spi.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * ChemicalReportServiceImpl
 */
@Service
public class ChemicalReportServiceImpl implements ChemicalReportService {
    /**
     * Logger
     */
    private Logger log = LoggerFactory.getLogger(ChemicalReportServiceImpl.class);

    /**
     * UnitReportRepo
     */
    @Autowired
    UnitReportRepo unitReportRepo;
    /**
     * DeviceRepo
     */
    @Autowired
    ChemicalRepo chemicalRepo;
    /**
     * ChemicalReportRepo
     */
    @Autowired
    ChemicalReportRepo chemicalReportRepo;


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
     * Check if chemical exist or not
     *
     * @param chemicalName Name the chemical
     * @return true or false
     */
    private boolean checkIfChemicalExists(String chemicalName){
        if(chemicalRepo.existsByChemicalName(chemicalName)){
            return true;
        }else {
            return false;
        }
    }



    /**
     * Save list chemical report into database
     *
     * @param dtoList      List of chemical report
     * @param unitReportId Id of unit report
     * @return Saved list of chemical report
     */
    @Override
    public List<ChemicalReport> saveListChemicalReport(List<ChemicalDTO> dtoList, int unitReportId) {
        List<ChemicalReport> list = new ArrayList<>();
        try{
            if(checkIfUnitReportExists(unitReportId)){
                ChemicalReport chemicalReport = new ChemicalReport();
                dtoList.forEach(chemicalDTO -> {
                    if(checkIfChemicalExists(chemicalDTO.getChemicalName())){
                        Chemical savedChemical = chemicalRepo.findByChemicalName(chemicalDTO.getChemicalName());
                        chemicalReport.setChemicalId(savedChemical.getChemicalId());
                        chemicalReport.setUnitReportId(unitReportId);
                        chemicalReport.setChemicalNumberLeft(chemicalDTO.getChemicalNumberLeft());
                        chemicalReport.setChemicalnumberNeed(chemicalDTO.getChemicalnumberNeed());
                        chemicalReport.setChemicalNumberUsed(chemicalDTO.getChemicalNumberUsed());
                        chemicalReport.setChemicalTypeId(chemicalDTO.getChemicalTypeId());
                        chemicalReport.setNote(chemicalDTO.getNote());
                        chemicalReportRepo.save(chemicalReport);
                        list.add(chemicalReport);
                    }else{
                        Chemical savedChemical = new Chemical(chemicalDTO.getChemicalName());
                        savedChemical = chemicalRepo.save(savedChemical);
                        chemicalReport.setChemicalId(savedChemical.getChemicalId());
                        chemicalReport.setUnitReportId(unitReportId);
                        chemicalReport.setChemicalNumberLeft(chemicalDTO.getChemicalNumberLeft());
                        chemicalReport.setChemicalnumberNeed(chemicalDTO.getChemicalnumberNeed());
                        chemicalReport.setChemicalNumberUsed(chemicalDTO.getChemicalNumberUsed());
                        chemicalReport.setChemicalTypeId(chemicalDTO.getChemicalTypeId());
                        chemicalReport.setNote(chemicalDTO.getNote());
                        chemicalReportRepo.save(chemicalReport);
                        list.add(chemicalReport);
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
