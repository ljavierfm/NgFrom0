import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {
  jugadores:any[]=[
    {nombre:'Moses Malon',equipo:'Utah Jazz'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls' },
    { nombre: 'Stockton', equipo: 'Utah Jazz' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
