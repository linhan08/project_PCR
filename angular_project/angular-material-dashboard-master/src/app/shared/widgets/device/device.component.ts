import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Device } from 'src/app/modules/auth/model/device.model';
import { DevicesService } from 'src/app/modules/service/device/devices.service';

@Component({
  selector: 'app-wedget-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  dtOptionsDevice: DataTables.Settings = {};
  dtTriggerDevice: Subject<any> = new Subject();

  devicesArray: any[] = [];
  devices: Observable<Device[]>;
  device: Device = new Device();
  deleteMessage = false;
  devicelist: any;

  constructor(private deviceservice: DevicesService) { }

  ngOnInit() {
    this.dtOptionsDevice = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.deviceservice.deviceViews().subscribe(data => {
      this.devices = data;
      this.dtTriggerDevice.next();
    });
  }
  deviceupdateform = new FormGroup({
    deviceName: new FormControl(),
    totalMachine: new FormControl(),
  });

  get DeviceName() {
    return this.deviceupdateform.get('deviceName');
  }

  get TotalMachine() {
    return this.deviceupdateform.get('totalMachine');
  }
}
