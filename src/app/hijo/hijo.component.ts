import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  //Decorador para que la propiedad pueda ser compartida
  @Input()
  aviso:string;

  @Input()
  avisos:string[];

  //Desencadena metodos del padre al hijo
  @Output()
  mensajeMarcado=new EventEmitter();

  marcar(item){
    item.leido=!item.leido;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
