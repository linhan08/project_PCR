import { Component, OnInit, Injectable,} from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { SurveyInfo } from '../survey/models/model/survey-info.model';
import { SurveyInfoService } from '../service/survey-info/survey-info.service';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | '', form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
@Injectable()
export class PostsComponent implements OnInit {

  matcher = new MyErrorStateMatcher()
  surveyInfo: SurveyInfo = new SurveyInfo();
  surveySaveForm: FormGroup;
  submitted = false;


  //chemical
  isShowChemical = false;
  isShowChemical2 = false;
  isShowChemical3 = false;

  numAddChemical1 = 0;
  numAddChemical2 = 0;
  numAddChemical3 = 0;

  numChemical1 = [];
  numChemical2 = [];
  numChemical3 = [];

  //device
  isShowDevice = false;
  numAddDevice = 0;
  numAddDevice1 = 0;

  numDevice = [];
  numDevice1= [];

  isExecutedTesting = null;
  showAll = true;
  showSomeFiled = true;
  showBlock = {
    blockA: true,
    blockB: true,
    blockC: true,
    blockD: true,
    blockE: true,
    blockA7: true,
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private surveyInfoService: SurveyInfoService) { }

  ngOnInit() {
    this.submitted = false;
    $(function() {
      $(".expand").on( "click", function() {
        $(this).next().slideToggle(200);
        const $expand = $(this).find(">:first-child");

        if($expand.text() == "fa-angle-down") {
          $expand.text("fa-angle-up");
        }
      });
    });

    this.surveySaveForm = this.formBuilder.group({
      //unit
      unitName:  ['', Validators.required, Validators.minLength(3)],
      areaName:  ['', Validators.required],
      provinceName:  ['', Validators.required],
      headOfApartment:  ['', Validators.required,],
      email:  ['', Validators.required,],
      phoneNumber:  ['', Validators.required],
      isExecutedTesting:  ['', Validators.required],
      typeOfUnit:  ['', Validators.required],

      //test-info
      numberOfTestFrom21:  ['', Validators.required],
      numberOfTestMoving:  ['', Validators.required],
      placeTestMoving:     ['', Validators.required],
      numberOfTestAtUnit:  ['', Validators.required],
      numberOfTestPerDay:  ['', Validators.required],
      numberOfTestIncoming:  ['', Validators.required],

      //employee-info
      numberOfEmployeeDoTest: ['', Validators.required],
      numberOfEmployeeUsePRC:  ['', Validators.required],
      employeeTestTrainingPlace:  ['', Validators.required],
      trainingPlace:  ['', Validators.required],
      numberOfEmployeeIncoming:  ['', Validators.required],

      //device-info
      deviceTypeId:  ['', Validators.required],
      deviceName:  ['', Validators.required],
      deviceId:  ['', Validators.required],
      devicePurpose:  ['', Validators.required],
      testEachDay:  ['', Validators.required],
      testEachTime:  ['', Validators.required],
      startUsingDate:  ['', Validators.required],
      note:  ['', Validators.required],

      numberOfMachineNeed:  ['', Validators.required],
      isNeedMoreMachine:  ['', Validators.required],

      //chemical-info
      // chemicalTypeId:  [Validators.required]),
      chemicalName:  ['', Validators.required],
      chemicalNumberUsed:  ['', Validators.required],
      chemicalNumberLeft:  ['', Validators.required],
      chemicalnumberNeed:  ['', Validators.required],
      noteChemical:  ['', Validators.required],

    });
  }

  //showfield
  radioShowSomeField() {
    this.showSomeFiled = true;
  }
  radioShowAll(val) {

    if(val.target.value === "1") {
      this.showSomeFiled = false;
      this.showBlock = {
        blockA: false,
        blockB: false,
        blockC: false,
        blockD: false,
        blockE: false,
        blockA7: false,
      }
    } else if(val.target.value === "0"){
      this.showSomeFiled = true;
      this.showBlock = {
        blockA: false,
        blockB: false,
        blockC: true,
        blockD: false,
        blockE: true,
        blockA7:true,
      }
      // this.typeOfUnit.value.A7 = 0;
      // this.NumberOfTestAtUnit.value.B4 = 0;
    }
  }

  get f() { return this.surveySaveForm.controls; }

  addNew1() {
    this.numAddChemical1++;
    this.isShowChemical = true;
    this.numChemical1.push(this.numAddChemical1);
  }

  removeChemical(val, id) {
    if(val && val == -1) {
      this.numChemical1.splice(id, 1);
      this.numAddChemical1--;
    }
  }
  ///chem2
  addNew2() {
    this.numAddChemical2++;
    this.isShowChemical2 = true;
    this.numChemical2.push(this.numAddChemical2);
  }

  removeChemical1(val, id) {
    if(val && val == -1) {
      this.numChemical2.splice(id, 1);
      this.numAddChemical2--;
    }
  }
  //chem3
  addNew3() {
    this.numAddChemical3++;
    this.isShowChemical3 = true;
    this.numChemical3.push(this.numAddChemical3);
  }

  removeChemical2(val, id) {
    if(val && val == -1) {
      this.numChemical3.splice(id, 1);
      this.numAddChemical3--;
    }
  }

  //device
  addDevice() {
    this.numAddDevice++;
    this.isShowDevice = true;
    this.numDevice.push(this.numAddDevice);
  }

  removeDevice(val, id) {
    if(val && val == -1) {
      this.numDevice.splice(id, 1);
      this.numAddDevice--;
    }
  }

  addDevice1() {
    this.numAddDevice1++;
    this.isShowDevice = true;
    this.numDevice1.push(this.numAddDevice1);
  }

  removeDevice1(val, id) {
    if(val && val == -1) {
      this.numDevice1.splice(id, 1);
      this.numAddDevice1--;
    }
  }

  addSurveyForm() {
    this.submitted = true;
    if (this.surveySaveForm.invalid) {
      return;
    }
    alert('SUCCESS!! \n\n');
  }

  saveNote() {
    this.submitted = true;

  }

  onReset() {
    this.submitted = false;
    this.surveyInfo = new SurveyInfo();
    this.surveySaveForm.reset();

    if(this.IsExecutedTesting.value === null) {
      this.showSomeFiled = false;
      this.showBlock = {
        blockA: true,
        blockB: true,
        blockC: true,
        blockD: true,
        blockE: true,
        blockA7: true,
      }
    }
  }

  save() {
    this.surveyInfoService.unit(this.surveyInfo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.surveyInfo = new SurveyInfo();

    console.log('Save successfully!');
  }

  saveSurvey(saveSurvey) {
    this.surveyInfo = new SurveyInfo();
    //gene-info
    this.surveyInfo.unit.unitId = this.UnitId.value;
    this.surveyInfo.unit.unitName = this.UnitName.value;
    this.surveyInfo.unit.address = this.Address.value;
    this.surveyInfo.unit.provinceName = this.ProvinceName.value;
    this.surveyInfo.unit.areaName = this.AreaName.value;
    this.surveyInfo.unit.headOfApartment = this.HeadOfApartment.value;
    this.surveyInfo.unit.email = this.Email.value;
    this.surveyInfo.unit.phoneNumber = this.PhoneNumber.value;
    this.surveyInfo.unit.isExecutedTesting = this.IsExecutedTesting.value;
    this.surveyInfo.unit.typeOfUnit = this.TypeOfUnit.value;

    //test-info
    this.surveyInfo.testResult.testResultId = this.TestResultId.value;
    this.surveyInfo.testResult.numberOfTestFrom21 = this.NumberOfTestFrom21.value;
    this.surveyInfo.testResult.numberOfTestMoving = this.NumberOfTestMoving.value;
    this.surveyInfo.testResult.placeTestMoving = this.PlaceTestMoving.value;
    this.surveyInfo.testResult.numberOfTestAtUnit = this.NumberOfTestAtUnit.value;
    this.surveyInfo.testResult.numberOfTestPerDay = this.NumberOfTestPerDay.value;
    this.surveyInfo.testResult.numberOfTestIncoming = this.NumberOfTestIncoming.value;

    //employee-info
    this.surveyInfo.employeeResult.employeeResultId = this.EmployeeResultId.value;
    this.surveyInfo.employeeResult.numberOfEmployeeDoTest = this.NumberOfEmployeeDoTest.value;
    this.surveyInfo.employeeResult.numberOfEmployeeUsePRC = this.NumberOfEmployeeUsePRC.value;
    this.surveyInfo.employeeResult.employeeTestTrainingPlace = this.EmployeeTestTrainingPlace.value;
    this.surveyInfo.employeeResult.trainingPlace = this.TrainingPlace.value;
    this.surveyInfo.employeeResult.numberOfEmployeeIncoming = this.NumberOfEmployeeIncoming.value;

    //device-info
    this.surveyInfo.deviceNeed.deviceTypeId = this.DeviceTypeId.value;
    this.surveyInfo.devices.deviceId = this.DeviceId.value;
    this.surveyInfo.devices.deviceName = this.DeviceName.value;
    this.surveyInfo.devices.devicePurpose = this.DevicePurpose.value;
    this.surveyInfo.devices.testEachDay = this.TestEachDay.value;
    this.surveyInfo.devices.testEachTime = this.TestEachTime.value;
    this.surveyInfo.devices.startUsingDate = this.StartUsingDate.value;
    this.surveyInfo.devices.note = this.note.value;
    this.surveyInfo.deviceNeed.isNeedMoreMachine = this.IsNeedMoreMachine.value;
    this.surveyInfo.deviceNeed.numberOfMachineNeed = this.NumberOfMachineNeed.value;

    //chemical-info
    this.surveyInfo.chemicals.chemicalId = this.ChemicalId.value;
    this.surveyInfo.chemicals.chemicalTypeId = this.ChemicalTypeId.value;
    this.surveyInfo.chemicals.chemicalName = this.ChemicalName.value;
    this.surveyInfo.chemicals.chemicalNumberUsed = this.ChemicalNumberUsed.value;
    this.surveyInfo.chemicals.chemicalNumberLeft = this.ChemicalNumberLeft.value;
    this.surveyInfo.chemicals.chemicalnumberNeed = this.ChemicalnumberNeed.value;
    this.surveyInfo.chemicals.note = this.Note.value;

    this.submitted = true;
    this.save();
  }

  //gene-info
  get UnitName() {
    return this.UnitName.get('unitName');
  }
  get UnitId() {
    return this.UnitName.get('unitId');
  }
  get AreaName() {
    return this.surveySaveForm.get('areaName');
  }
  get ProvinceName() {
    return this.surveySaveForm.get('provinceName');
  }
  get Address() {
    return this.surveySaveForm.get('address');
  }
  get HeadOfApartment() {
    return this.surveySaveForm.get('headOfApartment');
  }
  get Email() {
    return this.surveySaveForm.get('email');
  }
  get PhoneNumber() {
    return this.surveySaveForm.get('phoneNumber');
  }
  get IsExecutedTesting() {
    return this.surveySaveForm.get('isExecutedTesting');
  }
  get TypeOfUnit() {
    return this.surveySaveForm.get('typeOfUnit');
  }

  //test-info
  get TestResultId() {
    return this.surveySaveForm.get('testResultId');
  }
  get NumberOfTestFrom21() {
    return this.surveySaveForm.get('numberOfTestFrom21');
  }
  get NumberOfTestMoving() {
    return this.surveySaveForm.get('numberOfTestMoving');
  }
  get PlaceTestMoving() {
    return this.surveySaveForm.get('placeTestMoving');
  }
  get NumberOfTestAtUnit() {
    return this.surveySaveForm.get('numberOfTestAtUnit');
  }
  get NumberOfTestPerDay() {
    return this.surveySaveForm.get('numberOfTestPerDay');
  }
  get NumberOfTestIncoming() {
    return this.surveySaveForm.get('numberOfTestIncoming');
  }

  //employee-info
  get EmployeeResultId() {
    return this.surveySaveForm.get('employeeResultId');
  }
  get NumberOfEmployeeDoTest() {
    return this.surveySaveForm.get('numberOfEmployeeDoTest');
  }
  get NumberOfEmployeeUsePRC() {
    return this.surveySaveForm.get('numberOfEmployeeUsePRC');
  }
  get EmployeeTestTrainingPlace() {
    return this.surveySaveForm.get('employeeTestTrainingPlace');
  }
  get TrainingPlace() {
    return this.surveySaveForm.get('trainingPlace');
  }
  get NumberOfEmployeeIncoming() {
    return this.surveySaveForm.get('numberOfEmployeeIncoming');
  }

  //device-info
  get DeviceName(){
    return this.surveySaveForm.get('deviceName')
  }
  get DeviceTypeId() {
    return this.surveySaveForm.get('deviceTypeId');
  }
  get DeviceId() {
    return this.surveySaveForm.get('deviceId');
  }
  get DevicePurpose() {
    return this.surveySaveForm.get('devicePurpose');
  }
  get TestEachDay() {
    return this.surveySaveForm.get('testEachDay');
  }
  get TestEachTime() {
    return this.surveySaveForm.get('testEachTime');
  }
  get StartUsingDate() {
    return this.surveySaveForm.get('startUsingDate');
  }
  get note() {
    return this.surveySaveForm.get('note');
  }
  get IsNeedMoreMachine() {
    return this.surveySaveForm.get('isNeedMoreMachine');
  }
  get NumberOfMachineNeed() {
    return this.surveySaveForm.get('numberOfMachineNeed');
  }

  //chemical-info
  get ChemicalId() {
    return this.surveySaveForm.get('chemicalId');
  }
  get ChemicalName() {
    return this.surveySaveForm.get('chemicalName');
  }
   get ChemicalTypeId() {
     return this.surveySaveForm.get('chemicalTypeId');
   }
  get ChemicalNumberUsed() {
    return this.surveySaveForm.get('chemicalNumberUsed');
  }
  get ChemicalNumberLeft() {
    return this.surveySaveForm.get('chemicalNumberLeft');
  }
  get ChemicalnumberNeed() {
    return this.surveySaveForm.get('chemicalnumberNeed');
  }
  get Note() {
    return this.surveySaveForm.get('note');
  }
}

