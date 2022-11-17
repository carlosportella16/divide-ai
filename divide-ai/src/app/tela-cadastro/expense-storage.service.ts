import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Constants } from 'src/util/constants';
import { WebStorageUtil } from 'src/util/web-storage-util';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseStorageService {
  expenses!: Expense[];
  private expenseSource!: BehaviorSubject<number>;

  constructor(private httpClient: HttpClient) {
    this.expenses = WebStorageUtil.get(Constants.EXPENSES_KEY);
    this.expenseSource = new BehaviorSubject<number>(this.expenses.length);
  }

  save(expense: Expense) {
    this.expenses = WebStorageUtil.get(Constants.EXPENSES_KEY);
    this.expenses.push(expense);
    WebStorageUtil.set(Constants.EXPENSES_KEY, this.expenses);
    this.notifyTotalExpenses();
  }

  update(expense: Expense) {
    this.expenses = WebStorageUtil.get(Constants.EXPENSES_KEY);
    this.delete(expense);
    this.save(expense);
  }

  delete(expense: Expense) {
    this.expenses = WebStorageUtil.get(Constants.EXPENSES_KEY);
    this.expenses = this.expenses.filter((e) => {
      return e.id?.valueOf() != expense.id?.valueOf();
    });

    WebStorageUtil.set(Constants.EXPENSES_KEY, this.expenses);
    return true;
  }

  getExpenses(): Expense[] {
    this.expenses = WebStorageUtil.get(Constants.EXPENSES_KEY);
    return this.expenses;
  }

  notifyTotalExpenses() {
    this.expenseSource.next(this.getExpenses()?.length);
  }
}
