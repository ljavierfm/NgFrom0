import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html'
})
export class FechaActualComponent  {
  hoy:any=new Date();
}
