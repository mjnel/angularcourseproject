import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue');
  }


  @HostListener('click')click(eventData:Event){
    
  }





  constructor() { }

// add a certain css class to the elememt which it is clicked on and remove when click again 
// buttongroup = open class 


}
