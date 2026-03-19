import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseover')
  onHover() {
    console.log("click")
  }

}
