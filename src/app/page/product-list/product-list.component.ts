import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Subscription } from 'rxjs';
import { QProductList } from './product-list.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
   sub!: Subscription;
   rows!: QProductList[];

   constructor(
      private svc: ProductListService
   ){}
   
   ngOnInit(): void {
      this.list();
   }   

   list(){
      this.sub = this.svc.getList().subscribe(
        (result) => {
           this.rows = result;
           console.log(this.rows);
        }
      )
   } 

   showSectionGrid = 0; //default show ข้อมูลแบบ grid

   //ฟังก์ชัน display ข้อมูลแบบ grid veiw หรือ list view
   displayView(sw:number){
    switch(sw){
       case 0: 
        this.showSectionGrid = 0; //show ข้อมูลแบบ grid view
        break;
       default:
        this.showSectionGrid = 1; //show ข้อมูลแบบ list view
    }
   }


}
