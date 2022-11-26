import { Component, Input, OnInit, Output } from '@angular/core';
import { SplitExpensesService } from 'src/app/services/splitexpenses.service';
import { Shared } from 'src/util/shared';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  // Utilizando Input
 @Input() value: number = 0;


  constructor(private splitUpService: SplitExpensesService) {

  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.splitUpService.splitUpExpenses(this.value);
  }

}
