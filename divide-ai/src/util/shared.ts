import { Despesa } from "src/app/model/despesa";
import { Constants } from "./constants";

export class Shared {
  constructor(){}

  public static initializeWebStorage(): void {
    localStorage.setItem(Constants.EXPENSES_KEY, JSON.stringify([]));
  }
}
