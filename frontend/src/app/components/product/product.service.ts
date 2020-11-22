import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { Product } from './product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class ProductService {
  
  baseUrl = "";

  constructor(public snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string, action: string) { 
    this.snackBar.open(message, 'X', { 
       duration: 3000, 
       verticalPosition: 'bottom'
    }); 
  }
  
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
}
