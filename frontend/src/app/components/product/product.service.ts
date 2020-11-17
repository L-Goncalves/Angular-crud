import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 60000,
      verticalPosition: 'bottom',
      horizontalPosition: 'end',
   
    })
  }
}
