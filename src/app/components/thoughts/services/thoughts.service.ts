import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Thought} from "../abstractions/thoughts";

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  private readonly apiUrl = "http://localhost:3000/thoughts";

  constructor(private http: HttpClient) { }

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.apiUrl);
  }

  create(thought: Thought): Observable<Thought>{
    return this.http.post<Thought>(this.apiUrl, thought);
  }

  delete(id: number): Observable<Thought> {
    return this.http.delete<Thought>(`${this.apiUrl}/${id}`);
  }

  update(thought: Thought): Observable<Thought> {
    return this.http.put<Thought>(`${this.apiUrl}/${thought.id}`, thought);
  }

  findById(id: number): Observable<Thought> {
    return this.http.get<Thought>(`${this.apiUrl}/${id}`);
  }
}
