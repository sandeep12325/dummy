import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../mat/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar) { }

  // success(message: string) {
  //   this.snackBar.openFromComponent(SnackComponent, {
  //     duration: 2000,
  //     data: { message: message, type: 'success', action: 'Close' }
  //   });
  // }
  success(message: string, duration: number = 3000) {
  this.snackBar.openFromComponent(SnackComponent, {
    duration: duration,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    data: { 
      message: message, 
      type: 'success',
      action: 'Close'   // 👈 yaha pass karo
    }
  });
}

  error(message: string) {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 2000,
      data: { message: message, type: 'error' }
    });
  }
}
