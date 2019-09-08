import { Component, OnInit } from '@angular/core';
import { AllocationCenter } from '../../model/allocation-center';

@Component({
  selector: 'app-allocation-center',
  templateUrl: './allocation-center.component.html',
  styleUrls: ['./allocation-center.component.css']
})
export class AllocationCenterComponent implements OnInit {

  allocationCenter: AllocationCenter;

  constructor() { }

  ngOnInit() {
    this.allocationCenter = new AllocationCenter();
  }

}
