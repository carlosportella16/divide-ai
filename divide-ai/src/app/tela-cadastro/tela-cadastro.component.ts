import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/util/shared';
import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { ExpenseStorageService } from './expense-storage.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css'],
})
export class TelaCadastroComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  expense!: Expense;
  expenses!: Expense[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private expenseServiceStorage: ExpenseStorageService, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.expense = new Expense(0, '');
    this.expenses = this.expenseServiceStorage.getExpenses();
  }

  onSubmit() {
    // Salva expense
    this.expenseService
      .save(this.expense)
      .then(() => {
        // Emite mensagem
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Cadastro realizado com sucesso!';
        this.isSubmitted = true;
        this.expenses = this.expenseServiceStorage.getExpenses();
        this.expenseServiceStorage.notifyTotalExpenses();
      })
      .catch((e) => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = e;
      })
      .then(() => {
        // Reseta Formulario
        this.form.reset();
        this.expense = new Expense(0, '');
      });
  }
}
