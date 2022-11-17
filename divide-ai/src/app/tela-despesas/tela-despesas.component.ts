import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Shared } from 'src/util/shared';
import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { ExpenseStorageService } from '../tela-cadastro/expense-storage.service';

@Component({
  selector: 'app-tela-despesas',
  templateUrl: './tela-despesas.component.html',
  styleUrls: ['./tela-despesas.component.css'],

})
export class TelaDespesasComponent implements OnInit {

  expense!: Expense;
  expenses!: Expense[];
  people!: number;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  totalExpenses: number = 0;
  totalSplited: number =0;

  constructor(private expenseServiceStorage: ExpenseStorageService, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.expenses = this.expenseServiceStorage.getExpenses();
    this.totalExpenses = this.expenseService.calculateTotalExpenses();
  }

  onSplitUp() {
    this.expenseService
    .splitTotal(this.people);
  }

  /**
   * @param expense
   */
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
