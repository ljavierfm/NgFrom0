import { Directive,HostListener,HostBinding } from '@angular/core';



@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  //Enlaza la clase css itemOrange con la propiedad mostrar
  @HostBinding('class.item-orange')
  private mostrar: boolean = false;

  //Decoradores para eventos mouseover y mouseout
  @HostListener('mouseover')
  onOver() {
    this.mostrar = true;
  }
  @HostListener('mouseout')
  onOut() {
    this.mostrar = false;
  }

}
