import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class HandlermodalService {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: { name: 'User' } // Passing optional data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
