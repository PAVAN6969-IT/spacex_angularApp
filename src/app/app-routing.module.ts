import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearWiseFilterComponent } from './year-wise-filter/year-wise-filter.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', redirectTo:"/landing", pathMatch:'full'},
  { path:'landing', component:AppComponent },
  { path:'landing/:year', component:YearWiseFilterComponent },
  { path:'landing/successfullLaunch/:flag', component:YearWiseFilterComponent },
  { path:'landing/successfullLand/:flag', component:YearWiseFilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
