import { GeneInfo } from './gene-info.model';
import { TestInfo } from './test-info.model';
import { EmployeeInfo } from './employee-info.model';
import { DeviceInfo } from './device-info.model';
import { ChemicalInfo } from './chemical-info.model';
import { DeviceNeed } from './device-need.model';

export class SurveyInfo {
    unit: GeneInfo = new GeneInfo();
    testResult: TestInfo = new TestInfo();
    employeeResult: EmployeeInfo = new EmployeeInfo();
    devices: DeviceInfo = new DeviceInfo();
    deviceNeed: DeviceNeed = new DeviceNeed();
    chemicals: ChemicalInfo = new ChemicalInfo();

}
