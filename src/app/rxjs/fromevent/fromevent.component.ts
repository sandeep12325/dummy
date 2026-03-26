import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';
import { MyDialogComponent } from 'src/app/shared/my-dialog/my-dialog.component';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent {
  @ViewChild('btnclick') btnclick!: ElementRef;

  constructor(private matpop: MatDialog, public dialog: MatDialog) { }

  ngOnInit() {
    // fromEvent(this.btnclick.nativeElement,'click').subscribe((res)=>{
    //   console.log(res)
    // })
  }

  ngAfterViewInit() {
    // fromEvent(this.btnclick.nativeElement, 'click').subscribe((res) => {
    //   console.log(res)
    // })
  }

  opemmodal(itemName = 'Sample Item') {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      panelClass: 'stylish-dialog', // <--- Matches the CSS class above
      maxWidth: '400px',
      width: '90%',
      data: {
        title: 'Delete Item',
        message: `Are you sure you want to delete "${itemName}"?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
