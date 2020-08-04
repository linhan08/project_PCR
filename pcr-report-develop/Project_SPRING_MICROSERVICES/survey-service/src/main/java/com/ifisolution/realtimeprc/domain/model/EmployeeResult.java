package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;

/**
 * Employee result from database
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employee_result")
public class EmployeeResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_result_id")
    private int employeeResultId;

    @Column(name = "unit_report_id")
    private int unitReportId;

    @Column(name = "employee_number_doing_test")
    private int numberOfEmployeeDoingTest;

    @Column(name = "employee_number_using_PCR")
    private int numberOfEmployeeUsingPCR;

    @Column(name = "employee_testing_trained_place")
    private String employeeTestingTrainedPlace;

    @Column(name = "employee_trained_place")
    private String employeeTrainedPlace;

    @Column(name = "employee_number_incoming")
    private int numberOfEmployeeIncoming;

}
