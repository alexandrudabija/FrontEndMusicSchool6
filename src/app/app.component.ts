import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
import {UserService} from '../app/services/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {
  title = 'FrontEndMusicSchool';



constructor (private router : Router, private UserService :UserService ,
) {}



ngOnInit():void
{
  enableProdMode();


  if (!this.UserService.getToken())
{

  this.UserService.logout();
  this.router.navigate(['/index']);
}



}




}
