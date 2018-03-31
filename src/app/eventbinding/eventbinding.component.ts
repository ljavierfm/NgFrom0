import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  texto:string='texto original';
  constructor() { }

  ngOnInit() {
  }

  modTexto(){
    this.texto=this.texto.toUpperCase();
  }

}
