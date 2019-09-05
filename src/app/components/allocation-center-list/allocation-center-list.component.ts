import { Component, OnInit } from '@angular/core';
import { AllocationCenter } from '../../model/allocation-center';

@Component({
  selector: 'app-allocation-center-list',
  templateUrl: './allocation-center-list.component.html',
  styleUrls: ['./allocation-center-list.component.css']
})
export class AllocationCenterListComponent implements OnInit {

  allocationCenters: AllocationCenter[];

  constructor() { }

  ngOnInit() {
    let allocationCenter: AllocationCenter = new AllocationCenter();
    allocationCenter.name = "Test name";
    this.allocationCenters = [ allocationCenter ];
  }

}
