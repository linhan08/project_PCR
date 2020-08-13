package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 * Province table mapping with database
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "province")
public class Province {
    /**
     * Id of area
     */
    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int provinceId;

    /**
     * Area name
     */
    @Column(name = "province_name")
    private String provinceName;
}
