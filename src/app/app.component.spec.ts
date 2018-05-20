import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import { counterReducer, AppState } from './reducers/counter.reducer';
import { INCREMENT, DECREMENT, RESET } from './actions/counter.action';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ counter: counterReducer })
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch an action to increment counter', () => {
    const action = { type: INCREMENT };
    component.increment();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to decrement counter', () => {
    const action = { type: DECREMENT };
    component.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to reset counter', () => {
    const action = { type: RESET };
    component.reset();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
