import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { AppError } from "src/util/app-error";
import { ExpenseService } from "./expense.service";

@Injectable({
  providedIn: 'root',
})
export class SplitExpensesService {

  total!:number | any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private localStorage: ExpenseService,
    private httpClient: HttpClient){
  }

  splitUp(people:number): Observable<number> {

    if(people <= 1 || people === null) {
      return throwError(
        new AppError(
          'O valor precisa ser maior que UM!'
        )
      );
    }
    this.total = this.localStorage.calculateTotalExpenses() / people;

    return this.total;
  }

  splitUpExpenses(people:number) {
    this.total = this.localStorage.calculateTotalExpenses() / people;
    return this.total;
  }

}
