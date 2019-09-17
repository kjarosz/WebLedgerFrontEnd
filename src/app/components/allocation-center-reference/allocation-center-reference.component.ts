import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { AllocationCenter } from 'src/app/model/allocation-center';
import { AllocationCenterService } from 'src/app/services/allocation-center/allocation-center.service';

@Component({
  selector: 'allocation-center-reference',
  templateUrl: './allocation-center-reference.component.html',
  styleUrls: ['./allocation-center-reference.component.css']
})
export class AllocationCenterReferenceComponent implements OnInit {

  @Input() public label: string;
  @Input() public name: string;

  private allocationCenterReference: AllocationCenter;

  @Output() public allocationCenterChange = new EventEmitter();

  @Input()
  get allocationCenter(): AllocationCenter {
    return this.allocationCenterReference;
  }

  set allocationCenter(allocationCenter: AllocationCenter) {
    this.allocationCenterReference = allocationCenter;
    this.allocationCenterChange.emit(allocationCenter);
  }

  constructor(
    private allocationCenterSerice: AllocationCenterService
  ) { }

  ngOnInit() {
  }

  public allocationCenters: AllocationCenter[];
  public selectingAllocationCenter: boolean;

  showAllocationCenterSelectDialog() {
    this.allocationCenterSerice.getAllocationCenters()
      .subscribe((allocationCenters: AllocationCenter[]) => {
        this.allocationCenters = allocationCenters;
        this.selectingAllocationCenter = true;
      });
  }

  selectAllocationCenter(allocationCenter: AllocationCenter) {
    this.allocationCenter = allocationCenter;
    this.closeSelector();
  }

  closeSelector() {
    this.selectingAllocationCenter = false;
  }
}
