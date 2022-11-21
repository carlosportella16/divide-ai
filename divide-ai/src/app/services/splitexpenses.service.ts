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

  splitUpExpenses(people:number) {
    this.total = this.localStorage.calculateTotalExpenses() / people;
    return this.total;
  }

}
