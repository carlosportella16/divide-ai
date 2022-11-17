export class Expense {
  id!: string;
  cost!: number;
  description!: string;
  date: Date;

  constructor(cost: number, description: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.description = description;
    this.date = new Date();
  }

  public static Clone(expense: Expense) {
    let e : Expense = new Expense(expense.cost, expense.description);
    e.cost = expense.cost;
    e.description = expense.description;
    e.date = e.date;
    return e;
  }

}
