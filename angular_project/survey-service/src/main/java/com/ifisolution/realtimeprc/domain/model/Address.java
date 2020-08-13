package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "address")
public class Address {

    @Id
    @Column(name = "unit_id")
    private int unitId;

    @Column(name = "area_id")
    private int areaId;

    @Column(name = "province_id")
    private int provinceId;

    @Column(name = "country_id")
    private int countryId;

}
