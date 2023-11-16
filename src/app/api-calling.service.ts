import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { saveAs } from "file-saver";
// import * as FileSaver from 'src/file-saver';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  hello = "hello world"; 
  constructor(private httpClient: HttpClient) {
       
   }
  
   downloadFile(url: any,req: any){
    this.get(url, { responseType: "blob", observe: 'response' }).subscribe(
      (resp: any) => {
        if (resp.status == 200) {
          const blob = new Blob([resp.body], { type: 'application/vnd.ms-excel' });
          const contentDispositionHeader: string = resp.headers.get('Content-Disposition');
          let filename = "loanApplications.xlsx";
          if (contentDispositionHeader != null) {
              const parts: string[] = contentDispositionHeader.split(';');
              filename = parts[1].split('=')[1];
              filename = filename.replace(/\"/g, "");
          }
          saveAs(blob, filename);
      } else if (resp.status == 204) {
          alert("No Record Available");
      }}
    );
   }

   

//    get(url: string, options: {
//     headers?: HttpHeaders;
//     observe: 'response';
//     params?: HttpParams;
//     reportProgress?: boolean;
//     responseType?: 'json';
//     withCredentials?: boolean;
// }): Observable<HttpResponse<Object>>;


post(endPoint: any, body: any, options: any): Observable<any> {
  if (options.headers === undefined) {
    options.headers = new HttpHeaders();
  }

  // if (this.cookie.get("accountingId") != "") {
  //   options.headers = options.headers.append(
  //     "X-COMPANY-ID",
  //     this.cookie.get("accountingId")
  //   );
  // }

  // options.headers = options.headers.append(
  //   "Authorization",
  //   "Bearer " + this.cookie.get("token")
  // );
  return this.httpClient.post(endPoint, body, options).pipe(
    map((data: any) => {

      // this.common.clearToastr();
      if (
        data.status != undefined &&
        data.status != "OK" &&
        data.status != 200
      ) {
        let message = "";
        if (data.message != null) {
          message = data.message;
        } else {
          message = data.description;
        }
        //this.common.showToastr("error", message, "", true, true);
      }

      const date = new Date();
     // this.common.lastApiCallTime = date.getTime();
     // this.common.checkManualRefreshNeedToHide();
      return data;
    }),
    catchError((error) => {
      //this.common.checkErrorStatus(error);
      return throwError(error);
    })
  );
}

get(endPoint: any, options: any): Observable<any> {
  if (options.headers === undefined) {
    options.headers = new HttpHeaders();
  }

  return this.httpClient.get(endPoint,options).pipe(
    map((data: any) => {

      // this.common.clearToastr();
      if (
        data.status != undefined &&
        data.status != "OK" &&
        data.status != 200
      ) {
        let message = "";
        if (data.message != null) {
          message = data.message;
        } else {
          message = data.description;
        }
        //this.common.showToastr("error", message, "", true, true);
      }

      const date = new Date();
  
      return data;
    }),
    catchError((error) => {
      //this.common.checkErrorStatus(error);
      return throwError(error);
    })
  );
}

}
// function saveAs(blob: Blob, filename: string) {
//   throw new Error('Function not implemented.');
// }

