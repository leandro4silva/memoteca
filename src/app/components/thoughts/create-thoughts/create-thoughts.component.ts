import { Component, OnInit } from '@angular/core';
import {Thought} from "../abstractions/thoughts";
import {ThoughtsService} from "../services/thoughts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    model: 'model1'
  };

  constructor(
    private service: ThoughtsService,
    private router: Router,
  ) { }

  create(thought: Thought) {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    })
  }

  cancel(){
    this.router.navigate(['/list-thoughts']);
  }

  ngOnInit(): void {
  }
}
