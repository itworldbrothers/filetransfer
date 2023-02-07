import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponent]'
})
export class ComponentDirective {

  constructor(public ViewContainerRef: ViewContainerRef) { }

}
