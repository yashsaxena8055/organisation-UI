import { Component } from '@angular/core';
import { ApiCallingService } from '../api-calling.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.sass']
})
export class OrganisationComponent {

  baseUrl = "http://localhost:8080/org/";
  path : any;
  body : any;
  response : any[] | undefined;
  constructor(private apiService : ApiCallingService,private router : Router){
    this.fetchAllOrganisation();
    
   // window.onload = this.fetchAllOrganisation;
    // this.url = "localhost"
    // this.body = [];
  }
  fetchAllOrganisation(){
    this.path = this.baseUrl + "main/fetchAll";
   

   return this.apiService.get(this.path,{})
   .subscribe((resp) =>{
   if(resp != null || resp != undefined){
 
    
   this.response = resp;
   localStorage.setItem("organisationResponse",resp);
   
   }
   
 });
 }
}
