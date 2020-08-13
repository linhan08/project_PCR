package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "unit_report")
public class UnitReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "unit_report_id")
    private int unitReportId;

    @Column(name = "unit_id")
    private int unitId;

    @Column(name = "name_of_head_of_department")
    private String nameOfHeadOfDepartment;

    @Column(name = "email_of_head_of_department")
    private String emailOfHeadOfDepartment;

    @Column(name = "phone_of_head_of_department")
    private String phoneOfHeadOfDepartment;
    @Column(name = "report_status")
    private int status;
    @Column(name = "is_executed_test")
    private int isTestExecuted;

    @Column(name = "type_of_unit")
    private String typeOfUnit;
}
