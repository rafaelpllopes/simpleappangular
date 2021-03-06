import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  private users = [];

  private headers: Headers;
  private url: string = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http:  Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  
  ngOnInit() {
    this.lista()
      .subscribe(users => {
        users.forEach(user =>  this.add(user));
      }, erro => console.log(erro));
  }

  lista(): Observable<Array<any>> {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }

  add(user) {
    this.users.push(user);
  }
}
