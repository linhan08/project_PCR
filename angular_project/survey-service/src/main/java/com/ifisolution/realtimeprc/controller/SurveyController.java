package com.ifisolution.realtimeprc.controller;

import com.ifisolution.realtimeprc.domain.dto.*;
import com.ifisolution.realtimeprc.domain.dto.response.ApiResponse;
import com.ifisolution.realtimeprc.domain.model.*;
import com.ifisolution.realtimeprc.exception.AppException;
import com.ifisolution.realtimeprc.repository.ChemicalRepo;
import com.ifisolution.realtimeprc.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Survey Controller
 */
@RestController
@RequestMapping(value = "/api/v1")
public class SurveyController {
    @Autowired
    private Environment env;
    @Autowired
    private UnitService unitService;
    @Autowired
    private TestResultService testResultService;
    @Autowired
    private EmployeeResultService employeeResultService;
    @Autowired
    private DeviceNeedService deviceNeedService;
    @Autowired
    private DeviceReportService deviceReportService;
    @Autowired
    private ChemicalReportService chemicalReportService;
    @Autowired
    private UserService userService;
    @RequestMapping("/")
    public String home() {
        // This is useful for debugging
        // When having multiple instance of image service running at different ports. // We load balance among them, and display which instance received the request.
        return "Hello from Survey Service running at port: " + env.getProperty("local.server.port");
    }
    @PostMapping(value = "/")
    public ApiResponse fill(@Valid @RequestBody Wrapper wrapper){
        try{
            if(wrapper.getUnit().getStatus() == 0){
                    User currentUser = userService.findByUserName(wrapper.getUserName());
                    UnitReport unitReport = unitService.saveNewUnitAndUnitReport(wrapper.getUnit(),wrapper.getUnit().getAddress(),currentUser.getUserId());
                    TestResult testResult = testResultService.saveTestResultbyUnitId(unitReport.getUnitReportId(),wrapper.getTestResult());
                    DeviceNeed deviceNeed = deviceNeedService.saveDeviceNeed(unitReport.getUnitReportId(),wrapper.getDeviceNeed());
                    List<DeviceReport> deviceReports = deviceReportService.saveListDeviceReport(wrapper.getDevices(),unitReport.getUnitReportId());
                    System.out.println(currentUser.toString() + "Null");
                    return new ApiResponse(true,"successfully");
                }else{
                    User currentUser = userService.findByUserName(wrapper.getUserName());
                    UnitReport unitReport = unitService.saveNewUnitAndUnitReport(wrapper.getUnit(),wrapper.getUnit().getAddress(),currentUser.getUserId());
                    TestResult testResult = testResultService.saveTestResultbyUnitId(unitReport.getUnitReportId(),wrapper.getTestResult());
                    EmployeeResult employeeResult = employeeResultService.saveEmployeeResultByUnitReportID(unitReport.getUnitReportId(),wrapper.getEmployeeResult());
                    DeviceNeed deviceNeed = deviceNeedService.saveDeviceNeed(unitReport.getUnitReportId(),wrapper.getDeviceNeed());
                    List<DeviceReport> deviceReports = deviceReportService.saveListDeviceReport(wrapper.getDevices(),unitReport.getUnitReportId());
                    List<ChemicalReport> chemicalReports = chemicalReportService.saveListChemicalReport(wrapper.getChemicals(),unitReport.getUnitReportId());
                    return new ApiResponse(true,"successfully");
        }
        }catch (NullPointerException e) {
            System.out.println(e.getMessage());
            return new ApiResponse(false,"not successfully");
        }
    }
}
