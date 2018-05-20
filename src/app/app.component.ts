import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/counter.reducer';
import { Observable } from 'rxjs/Observable';
import * as fromActions from './actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;
  constructor(private store: Store<AppState>) {
    // this.counter$ = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: fromActions.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: fromActions.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: fromActions.RESET });
  }
}
