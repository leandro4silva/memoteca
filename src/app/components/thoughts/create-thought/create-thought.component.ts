import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Teste Learn Angular',
    author: 'Dev',
    model: 'model1'
  };

  constructor() { }

  create(){
    alert("Thought was created successfully.");
  }

  cancel(){
    alert("Thought was cancelled successfully.");
  }

  ngOnInit(): void {
  }
}
