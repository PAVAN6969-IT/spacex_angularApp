import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { launchDataService } from './launchData';
import { YearWiseFilterComponent } from './year-wise-filter/year-wise-filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    YearWiseFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [launchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
