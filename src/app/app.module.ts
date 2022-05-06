import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PipesexampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
