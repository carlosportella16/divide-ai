import { Constants } from "./constants";

export class Shared {
  constructor(){}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.EXPENSES_KEY) != null) {
      return;
    }

    localStorage.setItem(Constants.EXPENSES_KEY, JSON.stringify([]));
  }
}
