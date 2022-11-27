import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseStorageService } from 'src/app/services/expense-storage.service';
import { Shared } from 'src/util/shared';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.css']
})
export class TotalExpensesComponent implements OnInit {
  people!: number;
  value: any = 0;
  subscription: Subscription;

  constructor(private expenseStorageService: ExpenseStorageService) {
    this.subscription = this.expenseStorageService.asObservable().subscribe(
      (data) => {
        this.value = data;
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
    );
  }

  ngOnInit(): void {
    this.value = this.expenseStorageService.calculateTotalExpenses();
  }

}
