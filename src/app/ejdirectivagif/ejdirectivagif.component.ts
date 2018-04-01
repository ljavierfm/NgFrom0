import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivagif',
  templateUrl: './ejdirectivagif.component.html',
  styleUrls: ['./ejdirectivagif.component.css']
})
export class EjdirectivagifComponent implements OnInit {
  nombre:string;
  capital:string;
  constructor() { }

  ngOnInit() {
  }

  setResultado(){
    return this.capital==='Madrid'?true:false;
  }

}
