import { Component, OnInit } from '@angular/core';

interface Thought{
  id: string
  content: string
  author: string
  model: string
}

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts : Array<Thought> = [
    {
      id: '1',
      content: '@lorem ipsum @lorem ipsum@lorem ipsum @lorem ipsum @lorem ipsum  @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum ' +
        '@lorem ipsum @lorem ipsum@lorem ipsum @lorem ipsum @lorem ipsum  @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum ' +
      '@lorem ipsum @lorem ipsum@lorem ipsum @lorem ipsum @lorem ipsum  @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum ',
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
    },
    {
      id: '3',
      content: 'Teste 3',
      author: 'Dev',
      model: 'model3'
    },
    {
      id: '1',
      content: '@lorem ipsum @lorem ipsum@lorem ipsum @lorem ipsum @lorem ipsum  @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum ' +
        '@lorem ipsum @lorem ipsum@lorem ipsum @lorem ipsum @lorem ipsum  @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum ' +
        '@lorem ipsum @lorem ipsum@lorem ipsum @lorem ipsum @lorem ipsum  @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum @lorem ipsum ',
      author: 'Dev',
      model: 'model1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(thought: Thought): string{
    if(thought.content.length >= 256){
      return 'thought-g'
    }
    return 'thought-p'
  }
}
