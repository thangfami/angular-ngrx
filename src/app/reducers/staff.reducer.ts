import { StaffState } from '../models/staff.state';
import * as staffActions from '../actions/staff.action';
import { AppState } from '../models/app.state';

export const initialStaffState: StaffState = {
    staffs: []
};

export function staffReducer(state = initialStaffState, action: staffActions.StaffActions): AppState {
    switch (action.type) {
        case staffActions.GET_ALL_STAFFS_SUCCESS:
            return { staffs: action.payload };
        default:
            return state;
    }
}
