import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Usuario } from "../model/usuario.model";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({providedIn: "root"})
export class UsuarioService {
  private http = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').pipe(
      catchError(err => {
        console.log('Erro ao buscar usuários:', err);
        return throwError(() => new Error('Falha ao buscar usuários'))
      })
    );
  }
}
