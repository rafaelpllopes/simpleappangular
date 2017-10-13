import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-users',
  templateUrl: './cadastra-users.component.html',
  styleUrls: ['./cadastra-users.component.css']
})

export class CadastraUsersComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  cadastrar(cad: NgForm) {
    let cadastro = cad.form.controls;
  }
}
