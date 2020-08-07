import { GeneInfo } from './gene-info.model';
import { TestInfo } from './test-info.model';
import { EmployeeInfo } from './employee-info.model';
import { DeviceInfo } from './device-info.model';
import { ChemicalInfo } from './chemical-info.model';

export class SurveyInfo {
    geneInfoSurvey: GeneInfo;
    testInfoSurvey: TestInfo;
    employeeInfoSurvey: EmployeeInfo;
    deviceInfoSurvey: DeviceInfo;
    chemicalInfoSurvey: ChemicalInfo;
}