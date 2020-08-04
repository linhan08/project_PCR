package com.ifisolution.realtimeprc.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TestResult receive from front-end
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestResultDTO {
    private Long numberOfTestFrom21;

    private Long numberOfTestMoving;

    private String placeTestMoving;

    private int numberOfTestAtUnit;

    private int numberOfTestPerDay;

    private Long numberOfTestIncoming;
}
