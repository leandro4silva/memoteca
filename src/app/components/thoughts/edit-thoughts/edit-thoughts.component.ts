import { Component, OnInit } from '@angular/core';
import {ThoughtsService} from "../services/thoughts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.form = this.formBuilder.group({
      content: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\S*$/),
          Validators.maxLength(350)
        ])
      ],
      author: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      model: ['model1', [Validators.required]],
    })

    this.service.findById(id).subscribe(thought => {
      this.form.patchValue({
        content: thought.content,
        author: thought.author,
        model: thought.model
      });
    })
  }

  edit() {
    this.service.update(this.form.value).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    })
  }

  cancel(){
    this.router.navigate(['/list-thoughts']);
  }

}
