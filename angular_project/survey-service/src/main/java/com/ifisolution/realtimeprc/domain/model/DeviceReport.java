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
@Table(name = "device_report")
public class DeviceReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "device_report_id")
    private int deviceReportId;

    @Column(name = "unit_report_id")
    private int unitReportId;

    @Column(name = "device_type_id")
    private int deviceTypeId;

    @Column(name = "device_id")
    private int deviceId;

    @Column(name = "device_purpose")
    private String devicePurpose;

    @Column(name = "test_result_number_each_time")
    private int testEachTime;

    @Column(name = "test_number_each_day")
    private int testEachDay;

    @Column(name = "start_using_date")
    private String startUsingDate;

    private String note;
}
