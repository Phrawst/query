import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  
  

   showSectionGrid = 0; //default show ข้อมูลแบบ grid

   displayView(sw:number){
    switch(sw){
       case 0: 
        this.showSectionGrid = 0; //show grid view
        break;
       default:
        this.showSectionGrid = 1; //show list view
    }
   }


}
