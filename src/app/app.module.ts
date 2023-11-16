import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiCallingService } from './api-calling.service';
import { OrganisationComponent } from './organisation/organisation.component';
import { RouterModule } from '@angular/router';
import { CreateOrgComponent } from './create-org/create-org.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DispayOrgComponent } from './dispay-org/dispay-org.component';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    CreateOrgComponent,
    DispayOrgComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule],
  providers: [ApiCallingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
