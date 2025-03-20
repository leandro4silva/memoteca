import { Component, OnInit } from '@angular/core';
import {Thought} from "../abstractions/thoughts";
import {ThoughtsService} from "../services/thoughts.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  create() {
    if(this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thoughts']);
      })
    }
  }

  cancel(){
    this.router.navigate(['/list-thoughts']);
  }

  enableButton(): string{
    if(this.form.valid){
      return 'button'
    }else{
      return 'button_disable'
    }
  }

  ngOnInit(): void {
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
  }
}
