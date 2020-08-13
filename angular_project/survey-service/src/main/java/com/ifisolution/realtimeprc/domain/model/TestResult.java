package com.ifisolution.realtimeprc.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Employee result from database
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "test_result")
public class TestResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_id")
    private int testResultId;

    @Column(name = "unit_report_id")
    private int unitReportId;
    @Column(name = "test_number_from_day_21")
    private Long numberOfTestFrom21;
    @Column(name = "test_number_moved_to_other_unit")
    private Long numberOfTestMoving;
    @Column(name = "test_sample_moving_place")
    private String placeTestMoving;
    @Column(name = "test_number_execute_at_unit")
    private int numberOfTestAtUnit;
    @Column(name = "test_number_each_day")
    private int numberOfTestPerDay;
    @Column(name = "test_number_incoming")
    private Long numberOfTestIncoming;


}
