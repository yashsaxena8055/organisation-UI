import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationComponent } from './organisation/organisation.component';
import { AppComponent } from './app.component';
import { CreateOrgComponent } from './create-org/create-org.component';
import { DispayOrgComponent } from './dispay-org/dispay-org.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
   {path:'',component:OrganisationComponent},
  {path:'organisation',component:OrganisationComponent},
  {path:'createOrg',component:CreateOrgComponent},
  {path:'displayOrg/:orgName',component:DispayOrgComponent},
  {path:'template/:orgName',component:TemplateComponent}
  //{path:'about',component:AboutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
