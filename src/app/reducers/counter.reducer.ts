import * as fromActions from '../actions/counter.action';

export interface AppState {
    counter: number;
}

export function counterReducer(state: number = 0, action: fromActions.CounterActions): number {
    switch (action.type) {
        case fromActions.INCREMENT:
            return state + 1;
        case fromActions.DECREMENT:
            return state - 1;
        case fromActions.RESET:
            return 0;
        default:
            return state;
    }
}
