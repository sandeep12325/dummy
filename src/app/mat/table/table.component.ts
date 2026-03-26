import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../snack/snack.component';
import { SnackService } from 'src/app/serice/snack.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {


  constructor(private snackBar: MatSnackBar, private snackService: SnackService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;
  edit(element: any) {
    console.log('Edit clicked', element);
  }

  delete(element: any) {
    console.log('Delete clicked', element);

    // remove item from array
    this.dataSource = this.dataSource.filter(item => item !== element);
  }

  opensnack(message: string) {
    let snackBarRef = this.snackBar.open(message, "close", {
      duration: 2000
    });

    snackBarRef.afterDismissed().subscribe((res) => {
      console.log('The snack-bar was dismissed', res);
    })
    snackBarRef.onAction().subscribe((res) => {
      console.log('The snack-bar action was triggered', res);
    })
  }

  opencustom() {
    let snack = this.snackBar.openFromComponent(SnackComponent, {
      duration: 2000
    });
  }
  success() {
    this.snackService.success("Data saved successfully!");
  }

  error() {
    this.snackService.error("Failed to save data!");
  }

  opendialog() {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: { message: "Are you sure you want to delete this item?" }
    }).afterClosed().subscribe(res => {
      console.log('Dialog closed with result:', res);
    });
  }
}
