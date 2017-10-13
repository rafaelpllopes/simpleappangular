import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-users',
  templateUrl: './cadastra-users.component.html',
  styleUrls: ['./cadastra-users.component.css']
})

export class CadastraUsersComponent {
  userForm = new FormGroup({
    //id: new FormControl(),
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    website: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl(),
      geo: new FormGroup({
        lat: new FormControl(),
        lng: new FormControl()
      }),
    }),
    company: new FormGroup({
      name: new FormControl(),
      catchPhrase: new FormControl,
      bs: new FormControl
    })
  });

  private user = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      //id: [],
      name: [],
      username: [],
      email: ['', Validators.required],
      phone: [],
      website: [],
      address: this.formBuilder.group({
        street: [],
        suite: [],
        city: [],
        zipcode: [],
        geo: this.formBuilder.group({
          lat: [],
          lng: []
        })
      }),
      company: this.formBuilder.group({
        name: [],
        catchPhrase: [],
        bs: []
      })
    });
  }
  cadastrar(event) {
    event.preventDefault();
    if(!this.userForm.invalid){
      this.user.push(JSON.stringify(this.userForm.value));
      this.router.navigate(['']);
    }
    console.log(this.user);
  }
}