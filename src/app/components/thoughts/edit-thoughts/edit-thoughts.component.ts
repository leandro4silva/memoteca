import { Component, OnInit } from '@angular/core';
import {Thought} from "../abstractions/thoughts";
import {ThoughtsService} from "../services/thoughts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    model: 'model1'
  };

  constructor(
    private service: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(thought => {
      this.thought = thought;
    })
  }

  edit(thought: Thought) {
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    })
  }

  cancel(){
    this.router.navigate(['/list-thoughts']);
  }

}
