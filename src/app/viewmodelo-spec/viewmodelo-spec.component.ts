import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelo/alumno.modelo';


@Component({
  selector: 'app-viewmodelo-spec',
  templateUrl: './viewmodelo-spec.component.html',
  styleUrls: ['./viewmodelo-spec.component.css']
})
export class ViewmodeloSpecComponent implements OnInit {
  alumno1=new Alumno(1,'Javi','Fernandez','Oviedo');
  constructor() { }

  ngOnInit() {
  }

}
