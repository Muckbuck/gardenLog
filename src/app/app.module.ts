import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { PlantService } from './plant.service';
import { PlantComponent }  from './new-plant.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'plant/new',
        component: PlantComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '', redirectTo: '/plant/new', pathMatch: 'full' 
      }
    ]),
    
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
