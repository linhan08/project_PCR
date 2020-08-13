package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 * Country table mapping with database
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "country")
public class Country {
    /**
     * Id of area
     */
    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int countryId;

    /**
     * Area name
     */
    @Column(name = "country_name")
    private String countryName;
}
