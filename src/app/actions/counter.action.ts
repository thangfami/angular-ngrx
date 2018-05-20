import { Action } from '@ngrx/store';
export const INCREMENT = '[Counter] Increment';
export const INCREMENT_SUCCESS = '[Counter] Increment Success';
export const DECREMENT = '[Counter] Decrement';
export const DECREMENT_SUCCESS = '[Counter] Decrement Success';
export const RESET = '[Counter] Reset';
export const RESET_SUCCESS = '[Counter] Reset Success';

export class IncrementAction implements Action {
    readonly type = INCREMENT;
}

export class IncrementSuccessAction implements Action {
    readonly type = INCREMENT_SUCCESS;
}

export class DecrementAction implements Action {
    readonly type = DECREMENT;
}

export class DecrementSuccessAction implements Action {
    readonly type = DECREMENT_SUCCESS;
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export class ResetSuccessAction implements Action {
    readonly type = RESET_SUCCESS;
}

export type CounterActions = IncrementAction | DecrementAction | ResetAction | IncrementSuccessAction |
DecrementSuccessAction | ResetSuccessAction;
