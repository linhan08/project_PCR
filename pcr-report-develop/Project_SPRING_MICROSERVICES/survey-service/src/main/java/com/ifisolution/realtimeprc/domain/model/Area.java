package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.annotation.Generated;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 * Area table mapping with database
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "area")
public class Area {
    /**
     * Id of area
     */
    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int areaId;

    /**
     * Area name
     */
    @Column(name = "area_name")
    private String areaName;
}
