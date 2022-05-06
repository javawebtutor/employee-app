import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.css']
})
export class PipesexampleComponent implements OnInit {

  var_one: string = "angular";
  var_two: string = "REACT";
  var_three: string = "nodejs";
  var_four: number = 100.123454;
  var_five: number = 100;
  var_six:Date = new Date();
  var_seven: any={number:100};



  constructor() { }

  ngOnInit(): void {
  }

}
