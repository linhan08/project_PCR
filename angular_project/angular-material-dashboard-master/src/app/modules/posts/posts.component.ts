import { Component, OnInit, Injectable, ɵbypassSanitizationTrustResourceUrl} from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { SurveyInfo } from '../survey/models/model/survey-info.model';
import { SurveyInfoService } from '../service/survey-info/survey-info.service';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
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

  showAll = true;
  showSomeFiled = true;


  showBlock = {
    blockA: true,
    blockB: true,
    blockC: true,
    blockD: true,
    blockE: true,
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private surveyInfoService: SurveyInfoService) { }

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
      unitName:  [null, Validators.required],
      areaName:  [null, Validators.required],
      provinceName:  [null, Validators.required],
      headOfApartment:  [null, Validators.required],
      email:  [null, Validators.required],
      phoneNumber:  [null, Validators.required],
      isExecutedTesting:  [null, Validators.required],
      typeOfUnit:  [null, Validators.required],
  
      //test-info
      numberOfTestFrom21:  [null, Validators.required],
      numberOfTestMoving:  [null, Validators.required],
      placeTestMoving:     [null, Validators.required],
      numberOfTestAtUnit:  [null, Validators.required],
      numberOfTestPerDay:  [null, Validators.required],
      numberOfTestIncoming:  [null, Validators.required],
  
      //employee-info
      numberOfEmployeeDoTest: [null, Validators.required],
      numberOfEmployeeUsePRC:  [null, Validators.required],
      employeeTestTrainingPlace:  [null, Validators.required],
      trainingPlace:  [null, Validators.required],
      numberOfEmployeeIncoming:  [null, Validators.required],
  
      //device-info
      deviceTypeId:  [null, Validators.required],
      deviceName:  [null, Validators.required],
      // deviceId:  [Validators.required]),
      devicePurpose:  [null, Validators.required],
      testEachDay:  [null, Validators.required],
      testEachTime:  [null, Validators.required],
      startUsingDate:  [null, Validators.required],
      note:  [null, Validators.required],
      numberOfMachineNeed:  [null, Validators.required],
      isNeedMoreMachine:  [null, Validators.required],
  
      //chemical-info
      // chemicalTypeId:  [Validators.required]),
      chemicalName:  [null, Validators.required],
      chemicalNumberUsed:  [null, Validators.required],
      chemicalNumberLeft:  [null, Validators.required],
      chemicalnumberNeed:  [null, Validators.required],
      noteChemical:  [null, Validators.required],
  
    });
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
      }
    } else {
      this.showSomeFiled = true;
      this.showBlock = {
        blockA: false,
        blockB: false,
        blockC: true,
        blockD: false,
        blockE: true,
      }
      // this.typeOfUnit.value.A7 = 0;
      // this.NumberOfTestAtUnit.value.B4 = 0;
    }
  }

  radioShowSomeField() {
    this.showSomeFiled = true;
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
    this.submitted = false;
    this.surveySaveForm.reset();
  }
  // onReset() {
  //     this.submitted = false;
  //     this.surveyForm.reset();
  // }

  save() {
    this.surveyInfoService.unitReport()
      .subscribe(data => console.log(data), error => console.log(error));
    this.surveyInfo = new SurveyInfo();

    this.surveyInfoService.testResult()
      .subscribe(data => console.log(data), error => console.log(error));
    

    this.surveyInfoService.employeeResult()
      .subscribe(data => console.log(data), error => console.log(error));
    

    this.surveyInfoService.deviceNeed()
      .subscribe(data => console.log(data), error => console.log(error));
   

    this.surveyInfoService.deviceReports()
      .subscribe(data => console.log(data), error => console.log(error));


    this.surveyInfoService.chemicalReports()
      .subscribe(data => console.log(data), error => console.log(error));
    
    console.log('Save successfully!');
  }

  saveSurvey(saveSurvey) {
    this.surveyInfo = new SurveyInfo();
    //gene-info
    this.surveyInfo.geneInfoSurvey.unitName = this.UnitName.value;
    this.surveyInfo.geneInfoSurvey.address = this.Address.value;
    this.surveyInfo.geneInfoSurvey.provinceName = this.ProvinceName.value;
    this.surveyInfo.geneInfoSurvey.areaName = this.AreaName.value;
    this.surveyInfo.geneInfoSurvey.headOfApartment = this.HeadOfApartment.value;
    this.surveyInfo.geneInfoSurvey.email = this.Email.value;
    this.surveyInfo.geneInfoSurvey.phoneNumber = this.PhoneNumber.value;
    this.surveyInfo.geneInfoSurvey.isExecutedTesting = this.IsExecutedTesting.value;
    this.surveyInfo.geneInfoSurvey.typeOfUnit = this.TypeOfUnit.value;

    //test-info
    this.surveyInfo.testInfoSurvey.numberOfTestFrom21 = this.NumberOfTestFrom21.value;
    this.surveyInfo.testInfoSurvey.numberOfTestMoving = this.NumberOfTestMoving.value;
    this.surveyInfo.testInfoSurvey.placeTestMoving = this.PlaceTestMoving.value;
    this.surveyInfo.testInfoSurvey.numberOfTestAtUnit = this.NumberOfTestAtUnit.value;
    this.surveyInfo.testInfoSurvey.numberOfTestPerDay = this.NumberOfTestPerDay.value;
    this.surveyInfo.testInfoSurvey.numberOfTestIncoming = this.NumberOfTestIncoming.value;

    //employee-info
    this.surveyInfo.employeeInfoSurvey.numberOfEmployeeDoTest = this.NumberOfEmployeeDoTest.value;
    this.surveyInfo.employeeInfoSurvey.numberOfEmployeeUsePRC = this.NumberOfEmployeeUsePRC.value;
    this.surveyInfo.employeeInfoSurvey.employeeTestTrainingPlace = this.EmployeeTestTrainingPlace.value;
    this.surveyInfo.employeeInfoSurvey.trainingPlace = this.TrainingPlace.value;
    this.surveyInfo.employeeInfoSurvey.numberOfEmployeeIncoming = this.NumberOfEmployeeIncoming.value;

    //device-info
    this.surveyInfo.deviceInfoSurvey.deviceName = this.DeviceName.value;
    this.surveyInfo.deviceInfoSurvey.devicePurpose = this.DevicePurpose.value;
    this.surveyInfo.deviceInfoSurvey.testEachDay = this.TestEachDay.value;
    this.surveyInfo.deviceInfoSurvey.testEachTime = this.TestEachTime.value;
    this.surveyInfo.deviceInfoSurvey.startUsingDate = this.StartUsingDate.value;
    this.surveyInfo.deviceInfoSurvey.note = this.Note.value;
    this.surveyInfo.deviceNeedSurvey.isNeedMoreMachine = this.IsNeedMoreMachine.value;
    this.surveyInfo.deviceNeedSurvey.numberOfMachineNeed = this.NumberOfMachineNeed.value;

    //chemical-info
    this.surveyInfo.chemicalInfoSurvey.chemicalName = this.ChemicalName.value;
    this.surveyInfo.chemicalInfoSurvey.chemicalNumberUsed = this.ChemicalNumberUsed.value;
    this.surveyInfo.chemicalInfoSurvey.chemicalNumberLeft = this.ChemicalNumberLeft.value;
    this.surveyInfo.chemicalInfoSurvey.chemicalnumberNeed = this.ChemicalnumberNeed.value;
    this.surveyInfo.chemicalInfoSurvey.noteChemical = this.NoteChemical.value;

    this.submitted = true;
    this.save();
  }

  //gene-info
  get UnitName() {
    return this.UnitName.get('unitName');
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
  get DeviceName() {
    return this.surveySaveForm.get('deviceName');
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
  get Note() {
    return this.surveySaveForm.get('note');
  }
  get IsNeedMoreMachine() {
    return this.surveySaveForm.get('isNeedMoreMachine');
  }
  get NumberOfMachineNeed() {
    return this.surveySaveForm.get('numberOfMachineNeed');
  }

  //chemical-info
  get ChemicalName() {
    return this.surveySaveForm.get('chemicalName');
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
  get NoteChemical() {
    return this.surveySaveForm.get('noteChemical');
  }
}

