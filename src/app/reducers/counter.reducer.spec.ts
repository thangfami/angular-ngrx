import * as counterReducers from './counter.reducer';
import * as fromActions from '../actions/counter.action';
import { INCREMENT_SUCCESS } from '../actions/counter.action';

describe('Counter Reducer', () => {
    describe('undefined action', () => {
        it('should return default state', () => {
            const action = { type: undefined };
            const state = counterReducers.counterReducer(undefined, action);
            expect(state).toBe(0);
        });
    });

    describe('define action for counter', () => {
        it('should return 1 when action is increment', () => {
            const state = counterReducers.counterReducer(0, { type: INCREMENT_SUCCESS });
            expect(state).toBe(1);
        });

        it('should return -1 when action is decrement', () => {
            const state = counterReducers.counterReducer(0, { type: fromActions.DECREMENT_SUCCESS });
            expect(state).toBe(-1);
        });

        it('should return 0 when action is reset', () => {
            let state = 10;
            state = counterReducers.counterReducer(0, { type: fromActions.RESET });
            expect(state).toBe(0);
        });
    });

});
