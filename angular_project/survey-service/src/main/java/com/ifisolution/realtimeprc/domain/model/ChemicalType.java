package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.naming.Name;
import javax.persistence.*;

/**
 * Chemical Type
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "chemical_type")
public class ChemicalType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int typeId;

    @Column(name = "type_name")
    private String typeName;

}
