import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm } from '@angular/forms';
import { ApiCallingService } from '../api-calling.service';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.sass']
})
export class CreateOrgComponent {
 
    constructor(private apiService : ApiCallingService){
      
    }

     col = new Array;
     orgName : any;
     columnName : any;
     opt = new Option;
    
    
 
  // addColForm = new FormGroup({
  //   columnName: new FormControl("")
  // });
  // addOrgForm = new FormGroup({
  //   orgName: new FormControl("")
  // });
  

  addCol(formData : any){
 
  this.col.push(formData.columnName)
   
  }

  onSubmit(formData : any){
    this.orgName = formData.orgName;
    // console.log(this.col);
    // console.log(this.orgName);
  this.callCreateOrg();
    
  }
  callCreateOrg(){
    
    let req = {"organisationName":this.orgName,"columns":this.col};
    console.log(req)
    this.col = new Array;
    this.apiService.post("http://localhost:8080/org/main/create",req,{}).subscribe((resp) =>{
      console.log("helllo")
     if( resp.status != undefined &&
      resp.status == "OK" ||
      resp.status != 200) {
        alert("Organisation added successfully")
        location.reload();
      }else{
        console.log(resp);
      }
    } );
  }
}
