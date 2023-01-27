import {  Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { SendUser, login } from '../models/user.model';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  readonly  url= 'https://backend-music-school-jt3x.vercel.app/api';

noAutHeader={headers:new HttpHeaders({'noAuth':'True'})}



  constructor(private http :HttpClient ) { }



// get user
getUser():Observable<any>
{
  // const  httpOptions ={
  //   headers:new HttpHeaders({

  //   'Content-Type':'application/json',
  //   'Authorization':'Bearer ' +this.getToken()
  //   })}

  const reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' +this.getToken());




return this.http.get<any>(this.url+'/userProfile/user');

}




login(authCredentials: login):Observable<any> {

   return this.http.post<any>(this.url+'/auth/login',authCredentials,this.noAutHeader)



 }

// Create
postUser(user :SendUser):Observable<any>
{

 return this.http.post<any>(this.url+'/auth/register',user,this.noAutHeader)
}



getToken():any
{


  return localStorage.getItem("token");
}


setToken(token:any)
{

localStorage.setItem("token",token)
}

delteToken()
{

  localStorage.removeItem('token');
}


logout()
{
  this.delteToken()

}





// get all users
// getUsers():Observable<any>
// {

// return this.http.get<any>(this.url);

// }

// get user with id
// getUserid(_id : String):Observable<any>
// {
//   return this.http.get<any>(this.url +`/${_id}`);


// }



// Update
// putUser(data:ReceiveUser):Observable<any>
// {



// return this.http.put(this.url +`/${data._id}`,data,{responseType:'text'})

// }










}

