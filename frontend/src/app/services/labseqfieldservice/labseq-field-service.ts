import { Injectable } from '@angular/core';
import {ApiConnectService} from '../api-connect-service';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LabseqFieldService {
  constructor(private apiService: ApiConnectService){}

  getLabseqValue(index: number):Observable<Object>{
    return this.apiService.get("labseq/"+ index, null);
  }
}
