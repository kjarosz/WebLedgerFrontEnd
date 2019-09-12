import { Component, OnInit } from '@angular/core';
import { AllocationCenter } from '../../model/allocation-center';
import { AllocationCenterService } from 'src/app/services/allocation-center/allocation-center.service';
import { all } from 'q';

@Component({
  selector: 'app-allocation-center-list',
  templateUrl: './allocation-center-list.component.html',
  styleUrls: ['./allocation-center-list.component.css']
})
export class AllocationCenterListComponent implements OnInit {

  allocationCenters: AllocationCenter[];

  constructor(
    private allocationCenterService: AllocationCenterService
  ) { }

  ngOnInit() {
    this.allocationCenterService.getAllocationCenters()
      .subscribe((allocationCenters: AllocationCenter[]) => {
        this.allocationCenters = allocationCenters;
      });
  }

}
