import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public users = [
    {id: 1, name: 'rafael', email: 'rafael@rafael'},
    {id: 2, name: 'rafael', email: 'rafael@rafael'},
    {id: 3, name: 'rafael', email: 'rafael@rafael'}
  ];

  private headers: Headers;
  private url: string = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http:  Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  
  ngOnInit() {
    this.lista()
      .subscribe(users => {
        this.users = users;
      }, erro => console.log(erro));
  }

  lista(): Observable<Array<any>> {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }
}
