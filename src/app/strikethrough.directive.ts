import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem : ElementRef) { 

    // this.elem.nativeElement.style.textDecoration = 'line-through';

    //The ElementRef grants us direct access to the host DOM element through its nativeElement property.

   }

   @HostListener("click") onClicks(){

    this.textStyle("line-through tomato")

   };

  @HostListener("dblclick") onDoubleClicks() {

    this.textStyle("none")

  };

   private textStyle (action : string){

    this.elem.nativeElement.style.textDecoration = action;

   };

}
