import { Component, OnInit } from '@angular/core';
import { AllocationCenter } from '../../model/allocation-center';
import { Account } from '../../model/account';
import { AccountService } from 'src/app/services/account/account.service';
import { AllocationCenterService } from 'src/app/services/allocation-center/allocation-center.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-allocation-center',
  templateUrl: './allocation-center.component.html',
  styleUrls: ['./allocation-center.component.css']
})
export class AllocationCenterComponent implements OnInit {

  allocationCenter: AllocationCenter;
  accounts: Account[];

  constructor(
    private router: Router,
    private accountService: AccountService,
    private allocationCenterService: AllocationCenterService
  ) { }

  ngOnInit() {
    this.allocationCenter = new AllocationCenter();
  }

  saveAllocationCenter() {
    var allocationCenterTo = this.createAllocationCenterTo();
    this.allocationCenterService.saveAllocationCenter(allocationCenterTo)
      .subscribe((allocationCenter: AllocationCenter) => {
        this.router.navigateByUrl("/allocationcenters");
      });
  }

  private createAllocationCenterTo(): object {
    return {
      id: this.allocationCenter.id,
      name: this.allocationCenter.name,
      goal: this.allocationCenter.goal,
      accountId: this.allocationCenter.account.id
    };
  }

}
