import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivastyle',
  templateUrl: './ejdirectivastyle.component.html',
  styleUrls: ['./ejdirectivastyle.component.css']
})
export class EjdirectivastyleComponent implements OnInit {
  puntuacion:number;
  constructor() { }

  ngOnInit() {
  }
  setColor(){
    return this.puntuacion>=5?'green':'red';
  }
}
