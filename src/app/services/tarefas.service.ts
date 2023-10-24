import { Injectable } from '@angular/core';
import { ITarefas} from './i-tarefas';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
   private readonly API = 'http://localhost:3000/tarefa';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ITarefas[]>(this.API);
  }

  criar(tarefa: object) {
    return this.http.post(this.API, tarefa).pipe(take(1));
  }

}
