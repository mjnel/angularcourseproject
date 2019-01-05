import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding ('class.open') isOpen= false; 

  @HostListener('click')toggleOpen(){
    this.isOpen = !this.isOpen;
    
  }





  constructor() { }

// add a certain css class to the elememt which it is clicked on and remove when click again 
// buttongroup = open class 


}
