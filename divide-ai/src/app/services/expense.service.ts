import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/util/constants';
import { Expense } from '../model/expense';
import { ExpenseStorageService } from '../tela-cadastro/expense-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  URL = 'http://localhost:3000/expenses';
  URL_PT = 'http://localhost:3000/despesas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private localStorage: ExpenseStorageService, private httpClient: HttpClient) {}

  save(expense: Expense): Promise<Expense> {
    const p = new Promise<Expense>((resolve, reject) => {
      if (expense.cost <= 0) {
        reject('O valor da despesa precisa ser positivo!');
        return;
      }
      setTimeout(() => {
        this.localStorage.save(expense);
        resolve(expense);
      }, 0);
    });
    return p;
  }

  calculateTotalExpenses(): number {
    const expenses = JSON.parse(localStorage.getItem(Constants.EXPENSES_KEY)!);
    return expenses.reduce((total: number, expense: Expense) => {
      return total + expense.cost;
    }, 0);
  }

  splitTotal(people: number): number {
    const expenses = this.calculateTotalExpenses();
    return expenses / people;
  }

  getExpenseById(id: string): Promise<Expense[] | undefined> {
    return this.httpClient.get<Expense[] >(`${this.URL}/${id}`).toPromise();
  }
}
