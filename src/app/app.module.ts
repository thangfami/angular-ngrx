import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effect';
import { MatListModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Staffs } from './data/staffs';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffService } from './services/staff.service';
import { HttpClientModule } from '@angular/common/http';
import { staffReducer } from './reducers/staff.reducer';
import { StaffEffect } from './effects/staff.effect';


@NgModule({
  declarations: [
    AppComponent,
    StaffListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    InMemoryWebApiModule.forRoot(Staffs),
    EffectsModule.forRoot([CounterEffects, StaffEffect]),
    StoreModule.forRoot({ staffs: staffReducer })
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
