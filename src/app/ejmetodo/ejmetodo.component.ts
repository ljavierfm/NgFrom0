import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent implements OnInit {
  private puntuacion:number=9;
  constructor() { }

  ngOnInit() {
  }

  getPuntuacion(){
    return this.puntuacion;
  }

}
