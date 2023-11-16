import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from './api-calling.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})



export class AppComponent implements OnInit {
  baseUrl = "http://localhost:8080/org/";
  url : any;
  body : any;
  response : any[] | undefined;
  
  displayCreate = false;
 openCreateBlock(){
  if(this.displayCreate == false){
       this.displayCreate = true;
  }else{
    this.displayCreate = false;
  }
}


displayOrg(orgName: string){
  this.router.navigate(['/displayOrg'],{ queryParams: {"org_name":orgName},  skipLocationChange: false });
}

  constructor(private apiService : ApiCallingService,private router : Router){
    this.fetchAllOrganisation();
    
   // window.onload = this.fetchAllOrganisation;
    // this.url = "localhost"
    // this.body = [];
  }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
   // this.callPost(this.url , this.body , {});
  }
  

  fetchAllOrganisation(){
     this.url = this.baseUrl + "main/fetchAll";
    

    return this.apiService.get(this.url,{})
    .subscribe((resp) =>{
    if(resp != null || resp != undefined){
  
     
    this.response = resp;
    localStorage.setItem("organisationResponse",resp);
    
    }
    
  });
  }
  
}



