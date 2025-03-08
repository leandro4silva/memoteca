import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

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
