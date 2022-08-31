import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pergunta } from './pergunta.model';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private http: HttpClient) { }

  consultaPerguntas(): Observable<Pergunta[]> {
    const url = 'https://run.mocky.io/v3/5ede2fdb-32e2-4c65-a068-3906b61bc87d';

    return this.http.get<Pergunta[]>(url);
  }
}
