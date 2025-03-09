import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thought} from "../abstractions/thoughts";
import {ThoughtsService} from "../services/thoughts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventThought} from "../abstractions/eventThoughtEmitter";

@Component({
  selector: 'app-delete-thoughts',
  templateUrl: './delete-thoughts.component.html',
  styleUrls: ['./delete-thoughts.component.css']
})
export class DeleteThoughtsComponent implements OnInit {

  @Input() thought: Thought = {
    author: "",
    content: "",
    model: ""
  };

  @Output() thoughtClicked = new EventEmitter<EventThought>();

  constructor(
    private service: ThoughtsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteThought(){
    if(this.thought.id){
      this.service.delete(this.thought.id).subscribe(() => {
        this.thoughtClicked.emit({thought: this.thought, event: "deleted"});
      })
    }
  }

  cancelThought(){
    this.thoughtClicked.emit({thought: this.thought});
  }
}
