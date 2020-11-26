import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { Product } from './product.model';
import { EMPTY, empty, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import { isError } from 'util';
@Injectable({
  providedIn: 'any'
})
export class ProductService {
  
  baseUrl = "http://localhost:3001/products";

  constructor(public snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string, action: string, isError: boolean = false) { 
    this.snackBar.open(message, 'X', { 
       duration: 3000, 
       verticalPosition: 'bottom',
       panelClass: isError ? ['msg-error'] : ['msg-success']
    }); 
  }
  
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    console.error(e)
    this.showMessage('Ocorreu um erro', 'X', true);
    return EMPTY
  } 

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<Product>{
     const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
}
