package com.ifisolution.realtimeprc.service;

import com.ifisolution.realtimeprc.domain.dto.AddressDTO;
import com.ifisolution.realtimeprc.domain.dto.UnitInfoDTO;
import com.ifisolution.realtimeprc.domain.model.Unit;
import com.ifisolution.realtimeprc.domain.model.UnitReport;

/**
 * Unit Service
 */
public interface UnitService {
    /**
     * Save unit info into database includes address and unit info
     * @param unitInfoDTO contain all the unit info in the form
     * @param address address contain information of address
     */
    UnitReport saveNewUnitAndUnitReport(UnitInfoDTO unitInfoDTO, AddressDTO address,int userId);

    Unit getSelectedUnit(String unitName);
}
