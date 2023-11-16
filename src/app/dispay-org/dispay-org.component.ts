import { Component } from '@angular/core';
import { ApiCallingService } from '../api-calling.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dispay-org',
  templateUrl: './dispay-org.component.html',
  styleUrls: ['./dispay-org.component.sass']
})
export class DispayOrgComponent {
    orgName = '';
  constructor(private apiService : ApiCallingService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.orgName = params['orgName'];
      });

      this.fetchOrgByName(this.orgName);
    }



  colMap : any;
  isCreateBoxEnable = false;

  openCreateBlock(){
    if(this.isCreateBoxEnable){
      this.isCreateBoxEnable = false;
    }else{
     this.isCreateBoxEnable = true;
    }
  }
  downloadTemplate(name : string){
    this.apiService.downloadFile("http://localhost:8080/org/temp/dowload?orgName="+name,{})
  }
  fetchOrgByName(name : string){
    this.apiService.get("http://localhost:8080/org/main/fetchByName?orgName="+name,{}).subscribe(resp => {

   this.colMap = resp.columnMapping;

    });
    
  }
}
