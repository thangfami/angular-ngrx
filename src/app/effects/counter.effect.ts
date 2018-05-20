import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions/counter.action';

@Injectable()
export class CounterEffects {
    constructor(private action$: Actions) { }

    @Effect()
    increment$ = this.action$.ofType(fromActions.INCREMENT)
        .map(action => {
            console.log(action);
            return ({ type: fromActions.INCREMENT_SUCCESS });
        });

    @Effect()
    decrement$ = this.action$.ofType(fromActions.DECREMENT)
        .map(action => {
            console.log(action);
            return ({ type: fromActions.DECREMENT_SUCCESS });
        });

    @Effect()
    reset$ = this.action$.ofType(fromActions.RESET)
        .map(action => {
            console.log(action);
            return ({ type: fromActions.RESET_SUCCESS });
        });
}
