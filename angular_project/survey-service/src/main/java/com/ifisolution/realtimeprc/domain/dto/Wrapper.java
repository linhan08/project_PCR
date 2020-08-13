package com.ifisolution.realtimeprc.domain.dto;

import com.ifisolution.realtimeprc.domain.model.TestResult;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Wrapper {
    private List<ChemicalDTO> chemicals;
    private List<DeviceDTO> devices;
    private DeviceNeedDTO deviceNeed;
    private TestResultDTO testResult;
    private EmployeeResultDTO employeeResult;
    private UnitInfoDTO unit;
    private int unitReportId;
    private String userName;
}

