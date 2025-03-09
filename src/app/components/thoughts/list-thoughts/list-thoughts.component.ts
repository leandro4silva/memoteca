import { Component, OnInit } from '@angular/core';
import {Thought} from "../abstractions/thoughts";
import {ThoughtsService} from "../services/thoughts.service";
import {EventThought} from "../abstractions/eventThoughtEmitter";

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {
  listThoughts : Thought[] = [];

  eventThought: EventThought = {
    thought:{
      author: "",
      content: "",
      model: ""
    }
  };

  constructor(private service: ThoughtsService) { }

  ngOnInit(): void {
    this.service.list().subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  onThoughtClicked(event: EventThought) {
    this.eventThought = event;

    if(this.eventThought.event === "deleted"){
      this.listThoughts = this.listThoughts.filter(thought => thought.id !== event.thought.id);
    }
  }

  widthThought(thought: Thought): string{
    if(thought.content.length >= 256){
      return 'thought-g'
    }
    return 'thought-p'
  }
}
