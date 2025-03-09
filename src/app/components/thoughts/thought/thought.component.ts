import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thought} from "../abstractions/thoughts";
import {EventThought} from "../abstractions/eventThoughtEmitter";

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    content: "",
    author: "",
    model: ""
  }

  @Output() thoughtClicked = new EventEmitter<EventThought>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteThought(){
      this.thoughtClicked.emit({
        thought: this.thought, event: "delete"});
  }
}
