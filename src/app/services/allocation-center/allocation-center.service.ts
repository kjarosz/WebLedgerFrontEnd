import { Injectable } from '@angular/core';
import { AllocationCenter } from 'src/app/model/allocation-center';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllocationCenterService {

  constructor(
    private logger: NGXLogger,
    private http: HttpClient
  ) { }

  getAllocationCenters(): Observable<AllocationCenter[]> {
    var listUrl = environment.base_url + "allocationcenters";
    var observable = this.http.get<AllocationCenter[]>(listUrl);
    return observable;
  }

  saveAllocationCenter(allocationCenter): Observable<AllocationCenter> {
    var allocationCenterSaveUrl = environment.base_url + "allocationcenters/save";
    var observable = this.http.post<AllocationCenter>(allocationCenterSaveUrl, allocationCenter);
    return observable;
  }
}
