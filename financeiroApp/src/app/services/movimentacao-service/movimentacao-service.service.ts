import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Movimentacao } from 'src/app/models/Movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token').replace(/"/g,"")}`
    })
  }

  criarMovimentacao(movimentacao: Movimentacao) {
    return this.http.post(`${environment.api}/movimentacoes`, JSON.stringify(movimentacao), this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      ).toPromise()
  }

  buscarMovimentacaoPorMes(data){
    return this.http.put<Array<Movimentacao>>(`${environment.api}/movimentacoes/mes`, JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      ).toPromise()
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
