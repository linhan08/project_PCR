package com.ifisolution.realtimeprc.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeviceNeedDTO {
    @JsonProperty(value = "deviceTypeId")
    private int deviceTypeId;
    @JsonProperty(value = "isNeedMoreMachine")
    private int isNeedMoreMachine;
    @JsonProperty(value = "numberOfMachineNeed")
    private int numberOfMachineNeed;
}
