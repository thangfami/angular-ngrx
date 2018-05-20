import { Injectable } from '@angular/core';
import { Staff } from '../models/staff';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StaffService {
  apiRoot = 'api/staffs';

  constructor(private http$: HttpClient) { }

  getStaffs() {
    return this.http$.get<Staff[]>(this.apiRoot);
  }

}
