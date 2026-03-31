import { Inject, inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { Endereco } from "../model/endereco.model";

@Injectable({providedIn: "root"})
export class EnderecoService {
    
    private  http = inject(HttpClient);

    getEndereco(cep: string): Observable<Endereco> {
        return this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`).pipe(
            catchError(err => {
                console.log("Erro ao buscar CEP: ", err);
                return throwError(() => new Error("Erro ao buscar endereço"));
            })
        );
    }
}