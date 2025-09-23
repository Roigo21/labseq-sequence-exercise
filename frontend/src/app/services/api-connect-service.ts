import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../config/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  constructor(private http: HttpClient) { }
  get<T>(url: string, params: any) {
    return this.http.get<T>(environment.backendURL + url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params
    });
  }
  post<T>(url: string, body: any) {
    return this.http.post(environment.backendURL + url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
