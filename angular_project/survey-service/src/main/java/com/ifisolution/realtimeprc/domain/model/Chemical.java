package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Chemical table
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "chemical")
public class Chemical {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chemicalId;

    @Column(name = "chemical_type_id")
    private int chemicalTypeId;

    @Column(name = "chemical_name")
    private String chemicalName;

    public Chemical(String chemicalName) {
    this.chemicalName = chemicalName;
    }
}
