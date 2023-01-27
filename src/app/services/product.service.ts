import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

readonly  url= 'https://backend-music-school-jt3x.vercel.app/api';

noAutHeader={headers:new HttpHeaders({'noAuth':'True'})}

getProducts():Observable<Products[]>
{

return this.http.get<Products[]>(this.url+'/product',this.noAutHeader)

}



}
