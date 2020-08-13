package com.ifisolution.realtimeprc.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Employee result from front
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeResultDTO {

    private int numberOfEmployeeDoTest;

    private int numberOfEmployeeUsePRC;

    private String employeeTestTrainingPlace;

    private String trainingPlace;

    private int numberOfEmployeeIncoming;

}
