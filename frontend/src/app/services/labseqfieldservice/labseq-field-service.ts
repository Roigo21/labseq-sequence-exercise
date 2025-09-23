import { Injectable } from '@angular/core';
import {ApiConnectService} from '../api-connect-service';
import {Observable} from 'rxjs';
export interface LabseqResponse {
  result: number;
  execTimeNanoSeconds: number;
}
@Injectable({
  providedIn: 'root'
})
export class LabseqFieldService {
  constructor(private apiService: ApiConnectService){}

  getLabseqValue(index: number):Observable<LabseqResponse>{
    return this.apiService.get<LabseqResponse>("labseq/"+ index, null);
  }
}
