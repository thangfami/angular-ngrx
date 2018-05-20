import * as fromActions from '../actions/counter.action';

export interface AppState {
    counter: number;
}

export function counterReducer(state: number = 0, action: fromActions.CounterActions): number {
    switch (action.type) {
        case fromActions.INCREMENT_SUCCESS:
            return state + 1;
        case fromActions.DECREMENT_SUCCESS:
            return state - 1;
        case fromActions.RESET_SUCCESS:
            return 0;
        default:
            return state;
    }
}
