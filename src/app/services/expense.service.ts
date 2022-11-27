import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AppError } from 'src/util/app-error';
import { Constants } from 'src/util/constants';
import { ErrorUtil } from 'src/util/error-util';
import { RoutesAPI } from 'src/util/routes-api';
import { Expense } from '../model/expense';
import { ExpenseStorageService } from './expense-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  URL = 'http://localhost:3000/expenses';
  URL_PT = 'http://localhost:3000/despesas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private localStorage: ExpenseStorageService,
    private httpClient: HttpClient
  ) {}

  save(expense: Expense): Observable<Expense> {
    if(expense.cost <= 0) {
      return throwError(
        new AppError(
          'O valor precisa ser maior que ZERO!'
        )
      );
    }
    return this.httpClient
    .post<Expense>(this.URL, expense, this.httpOptions)
    .pipe(catchError(ErrorUtil.handleError));
  }


  getExpenseById(id: string): Promise<Expense[] | undefined> {
    return this.httpClient.get<Expense[]>(`${this.URL}/${id}`).toPromise();
  }
}
