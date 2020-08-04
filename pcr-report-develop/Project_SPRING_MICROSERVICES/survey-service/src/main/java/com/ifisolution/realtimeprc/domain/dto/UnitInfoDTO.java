package com.ifisolution.realtimeprc.domain.dto;

import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UnitInfoDTO {

    private String unitName;

    private String headOfApartment;

    private AddressDTO address;

    private String email;

    private String phoneNumber;

    private int isExecutedTesting;

    private String typeOfUnit;

    @Override
    public String toString() {
        return "UnitInfoDTO{" +
                "unitName='" + unitName + '\'' +
                ", headOfApartment='" + headOfApartment + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", isExecutedTesting=" + isExecutedTesting +
                ", typeOfUnit='" + typeOfUnit + '\'' +
                '}';
    }
}
