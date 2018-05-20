import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { StaffService } from '../services/staff.service';
import * as staffActions from '../actions/staff.action';
import 'rxjs/add/operator/switchMap';
import { Action } from '@ngrx/store';

@Injectable()
export class StaffEffect {
    constructor(private action$: Actions, private staffService: StaffService) { }

    @Effect()
    getAllStaff$: Observable<Action> = this.action$.ofType(staffActions.GET_ALL_STAFFS).switchMap(() =>
        this.staffService.getStaffs().map((res) => new staffActions.GetAllStaffsSuccessAction(res))
    );
}
