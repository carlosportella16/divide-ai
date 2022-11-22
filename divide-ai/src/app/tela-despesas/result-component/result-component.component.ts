import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseStorageService } from 'src/app/services/expense-storage.service';
import { SplitExpensesService } from 'src/app/services/splitexpenses.service';
import { Shared } from 'src/util/shared';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  value: number = 0;
  subscription: Subscription;

  constructor(private splitUpService: SplitExpensesService, private expenseStorageService: ExpenseStorageService) {
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
    Shared.initializeWebStorage();
    this.value = this.splitUpService.total;
  }

}
