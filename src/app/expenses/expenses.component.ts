import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/util/shared';
import { Expense } from '../model/expense';
import { SplitExpensesService } from '../services/splitexpenses.service';
import { ExpenseStorageService } from '../services/expense-storage.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  @ViewChild('formP') formP!: NgForm;

  expense!: Expense;
  expenses!: Expense[];

  people!: number;
  total!: number;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;
  showResult: boolean = true;

  router!: string;

  constructor(
    private expenseServiceStorage: ExpenseStorageService,
    private splitService: SplitExpensesService
  ) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.expenses = this.expenseServiceStorage.getExpenses();
  }

  onSplitUp() {
    this.total = this.splitService.splitUpExpenses(this.people);
    this.showResult = false;
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param expense
   */

  onEdit(expense: Expense) {
    let clone = Expense.clone(expense);
    this.expense = clone;
  }

  onDelete(e: Expense) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + e.description
    );
    if (!confirmation) {
      return;
    }

    let response: boolean = this.expenseServiceStorage.delete(e);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.expenses = this.expenseServiceStorage.getExpenses();
    this.expenseServiceStorage.notifyTotalExpenses();
  }

}
