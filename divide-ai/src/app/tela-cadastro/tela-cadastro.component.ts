import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/util/shared';
import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { ExpenseStorageService } from '../services/expense-storage.service';

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

  constructor(
    private expenseServiceStorage: ExpenseStorageService,
    private expenseService: ExpenseService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.expense = new Expense(0, '');
    this.expenses = this.expenseServiceStorage.getExpenses();
  }

  onSubmit() {
    // Salva expense
    this.expenseService
      .save(this.expense)
      .subscribe(
        (data:Expense) => {
        this.expense = data;
        // salvando no local storage
        this.expenseServiceStorage.save(this.expense);
        this.isShowMessage = true;
        this.isSuccess = true;

        //emite mensagem de sucesso
        this.message = 'Cadastro realizado com sucesso!';
        this.isSubmitted = true;
        this.expenses = this.expenseServiceStorage.getExpenses();

        //reseta valores
        this.form.reset();
        this.expense = new Expense(0, '');
        this.expenseServiceStorage.notifyTotalExpenses();
        },
        (error) => {
          //imprime mensagem de erro
          this.isShowMessage = true;
          this.isSuccess = false;
          this.message = error;
        }

      );
  }
}
