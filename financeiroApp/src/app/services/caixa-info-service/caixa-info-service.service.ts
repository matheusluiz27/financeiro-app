import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CaixaInfo } from 'src/app/models/CaixaInfo';

@Injectable({
  providedIn: 'root'
})
export class CaixaInfoServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token').replace(/"/g,"")}`
    })
  }

  getCaixaInfo() {
    return this.http.get<CaixaInfo>(`${environment.api}/caixa`, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      ).toPromise()
  }

  getCaixaInfoPorMes(data){
    return this.http.put<CaixaInfo>(`${environment.api}/caixa/mes`, JSON.stringify(data), this.httpOptions)
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
