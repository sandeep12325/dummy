import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent {
  @ViewChild('btnclick') btnclick!:ElementRef

  ngOnInit()
  {
    // fromEvent(this.btnclick.nativeElement,'click').subscribe((res)=>{
    //   console.log(res)
    // })
  }

  ngAfterViewInit()
  {
    fromEvent(this.btnclick.nativeElement,'click').subscribe((res)=>{
      console.log(res)
    })
  }
}
