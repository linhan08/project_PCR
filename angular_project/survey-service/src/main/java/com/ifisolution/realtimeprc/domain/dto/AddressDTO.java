package com.ifisolution.realtimeprc.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
    private int areaId;
    private int countryId;
    private int provinceId;

    
}
