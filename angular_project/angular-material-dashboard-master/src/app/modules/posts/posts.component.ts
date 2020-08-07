import { Component, OnInit, Injectable} from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SurveyInfo } from '../survey/models/model/survey-info.model';
import { SurveyInfoService } from '../service/survey-info/survey-info.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
@Injectable()
export class PostsComponent implements OnInit {

  surveyInfo: SurveyInfo = new SurveyInfo();
  surveyForm: FormGroup;
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
  constructor(private formBuilder: FormBuilder, private surveyInfoService: SurveyInfoService) { }

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
  }


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

  // convenience getter for easy access to form fields
  get f() { return this.surveyForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.surveyForm.invalid) {
          return;
      }
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.surveyForm.value, null, 4));
  }

  surveySaveForm = new FormGroup({
    unitName: new FormControl(),
    address: new FormControl(),
    headOfApartment: new FormControl()
  });

  saveSurvey(saveSurvey) {
    this.surveyInfo = new SurveyInfo();
    this.surveyInfo.geneInfoSurvey.unitName = this.UnitName.value;
    this.surveyInfo.geneInfoSurvey.address = this.Address.value;
    this.surveyInfo.geneInfoSurvey.headOfApartment = this.HeadOfApartment.value;

    this.submitted = true;
    this.save();
  }

  addSurveyForm() {
    this.submitted = false;
    this.surveySaveForm.reset();
  }
  onReset() {
      this.submitted = false;
      this.surveyForm.reset();
  }
  
  save() {
    this.surveyInfoService.createStudent(this.surveyInfo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.surveyInfo = new SurveyInfo();
  }

  get UnitName() {
    return this.UnitName.get('unitName');
  }

  get Address() {
    return this.surveySaveForm.get('address');
  }

  get HeadOfApartment() {
    return this.surveySaveForm.get('headOfApartment');
  }

}

