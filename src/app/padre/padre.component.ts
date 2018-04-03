import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  valorPadre:string="Este texto se inyecta desde el padre";
  avisos:any[]=[
    {leido:false,texto:'Aviso1'},
    {leido:false,texto:"Aviso2"},
    {leido:false,texto:"Aviso3"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
