import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import {   Observable } from 'rxjs';
import { ReceiveUser } from 'src/app/models/user.model';


 @Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {



public  user$ = new Observable<ReceiveUser>
public orders$ = new Observable<any>


constructor (private UserService :UserService, private OrderService :OrderService) { }





   ngOnInit(): void
  {
    this.user$= this.UserService.getUser()


    this.orders$=this.OrderService.getOrdersUser();
  }







countQty(Array:any):number
{
return Array.map((items:any)=>items.quantityProduct).reduce((prev:any,current:any)=>prev+current,0)

}








}
