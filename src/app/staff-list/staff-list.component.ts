import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Staff } from '../models/staff';
import { Store } from '@ngrx/store';
import { StaffState } from '../models/staff.state';
import * as staffActions from '../actions/staff.action';
import { AppState } from '../models/app.state';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffs$: Observable<Staff[]>;

  constructor(private store: Store<AppState>) {
    this.staffs$ = store.select(state => state.staffs.staffs);
  }

  ngOnInit() {
  }

  getAllStaff() {
    this.store.dispatch({ type: staffActions.GET_ALL_STAFFS });
  }

}
