package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Chemical info mapping from database
 * Contain all the information
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "chemical_report")
public class ChemicalReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chemical_report_id")
    private int chemicalReportId;

    @Column(name = "unit_report_id")
    private int unitReportId;

    @Column(name = "chemical_type_id")
    private int chemicalTypeId;

    @Column(name = "chemical_id")
    private int chemicalId;

    @Column(name = "chemical_number_usedd")
    private int chemicalNumberUsed;

    @Column(name="chemical_number_left")
    private int chemicalNumberLeft;

    @Column(name = "chemical_number_needed")
    private int chemicalnumberNeed;

    @Column(name = "note")
    private String note;
}
