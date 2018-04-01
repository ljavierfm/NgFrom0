import { Component, OnInit } from '@angular/core';

import { Alumno } from '../modelo/alumno.modelo';


@Component({
  selector: 'app-arrayobjetos',
  templateUrl: './arrayobjetos.component.html',
  styleUrls: ['./arrayobjetos.component.css']
})
export class ArrayobjetosComponent implements OnInit {
  public alumnos:Array<Alumno>=[
    {id:1,nombre:'Juan',apellidos:'Gutierrez',ciudad:'Mexico DF'},
    { id: 2, nombre: 'Pablo', apellidos: 'Galiley', ciudad: 'Avilés' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
