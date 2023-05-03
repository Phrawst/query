import { Injectable  } from "@angular/core";


@Injectable({
   providedIn: 'root'
})

export class SharedService{
   public postHead = { 'Content-Type': 'application/json'};  

   getUrl(api_path: string){
      return `http://localhost:3001/${api_path}`;
   }
}