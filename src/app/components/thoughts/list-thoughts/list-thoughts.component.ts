import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts = [
    {
      id: '1',
      content: 'Teste',
      author: 'Dev',
      model: 'model1'
    },
    {
      id: '2',
      content: 'Teste 2',
      author: 'Dev',
      model: 'model2'
    },
    {
      id: '3',
      content: 'Teste 3',
      author: 'Dev',
      model: 'model3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
