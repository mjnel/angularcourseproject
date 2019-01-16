import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding ('class.open') isOpen= false; 

  @HostBinding('class.open') condition = false;


  @HostListener('click') onChange() {
    this.condition = !this.condition;  
  }








  constructor() { }

// add a certain css class to the elememt which it is clicked on and remove when click again 
// buttongroup = open class 


}
