import { Component } from '@angular/core';
import { ApiCallingService } from '../api-calling.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.sass']
})
export class TemplateComponent {
  

  orgName = '';
  constructor(private apiService : ApiCallingService,private route: ActivatedRoute,private http : HttpClient){
    this.route.params.subscribe(params => {
      this.orgName = params['orgName'];
      });

    }

  fileName = '' ;
  file:File | undefined
  tempData : undefined;
  header = [];
  downloadTemplate(){
    this.apiService.downloadFile("http://localhost:8080/org/temp/download?orgName="+this.orgName,{})
  }
  
  onFileSelected(event : any,name :any) {

    this.file = event.target.files[0];
    this.fileName = name
    console.log(this.file)
    }

    fileUpload(){
      console.log("outside");
      if (this.file) {

        console.log("inside")

        const formData = new FormData();

        formData.append("file", this.file);

      this.apiService.post("http://localhost:8080/org/temp/upload?orgName="+this.fileName,formData,{}).subscribe(resp =>{
        console.log(resp);
        this.tempData = resp.list;
        this.header = resp.header;
      });

    }
    }
}
