import { Action } from '@ngrx/store';
import { Staff } from '../models/staff';

export const CREATE_STAFF = '[STAFF] Create';
export const GET_ALL_STAFFS = '[STAFF] Get All';
export const GET_ALL_STAFFS_SUCCESS = '[STAFF] Get All Success';
export const RESET = '[STAFF] Reset';

export class CreateStaffAction implements Action {
    readonly type = CREATE_STAFF;
    constructor(public payload: Staff) { }
}

export class GetAllStaffsAction implements Action {
    readonly type = GET_ALL_STAFFS;
}

export class GetAllStaffsSuccessAction implements Action {
    readonly type = GET_ALL_STAFFS_SUCCESS;
    constructor(public payload: Staff[]) { }
}

export class ResetStaffAction implements Action {
    readonly type = RESET;
}

export type StaffActions = CreateStaffAction | GetAllStaffsAction | GetAllStaffsSuccessAction |ResetStaffAction;
