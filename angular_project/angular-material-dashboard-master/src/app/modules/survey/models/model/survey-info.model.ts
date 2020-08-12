import { GeneInfo } from './gene-info.model';
import { TestInfo } from './test-info.model';
import { EmployeeInfo } from './employee-info.model';
import { DeviceInfo } from './device-info.model';
import { ChemicalInfo } from './chemical-info.model';
import { DeviceNeed } from './device-need.model';

export class SurveyInfo {
    geneInfoSurvey: GeneInfo = new GeneInfo();
    testInfoSurvey: TestInfo = new TestInfo();
    employeeInfoSurvey: EmployeeInfo = new EmployeeInfo();
    deviceInfoSurvey: DeviceInfo = new DeviceInfo();
    deviceNeedSurvey: DeviceNeed = new DeviceNeed();
    chemicalInfoSurvey: ChemicalInfo = new ChemicalInfo();

}
