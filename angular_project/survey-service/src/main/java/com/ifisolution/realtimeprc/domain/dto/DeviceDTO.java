package com.ifisolution.realtimeprc.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Device Information from front-end
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeviceDTO {
    @JsonProperty(value = "deviceTypeId")
    private int deviceTypeId;
    @JsonProperty(value = "deviceName")
    private String deviceName;
    @JsonProperty(value = "deviceId")
    private int deviceId;
    @JsonProperty(value = "devicePurpose")
    private String devicePurpose;
    @JsonProperty(value = "testEachDay")
    private int testEachDay;
    @JsonProperty(value = "testEachTime")
    private int testEachTime;
    @JsonProperty(value = "startUsingDate")
    private String startUsingDate;
    @JsonProperty(value = "note")
    private String note;
}
