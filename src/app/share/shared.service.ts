import { Injectable  } from "@angular/core";
import { environment } from "./../../environments/environment";


export class SharedService{
   getUrl(api_path: string){
    return `${environment.apiUrl}/api/${api_path}`;
   }
}