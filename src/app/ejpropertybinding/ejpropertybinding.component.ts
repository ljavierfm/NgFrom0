import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {
  public texto:string="Escribe algo";
  constructor() {
    setTimeout(()=>{
      this.texto='por favor...';
    },3000)
   }

  ngOnInit() {
  }

}
