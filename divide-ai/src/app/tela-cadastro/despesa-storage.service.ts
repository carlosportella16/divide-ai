import { Injectable } from "@angular/core";
import { Constants } from "src/util/constants";
import { WebStorageUtil } from "src/util/web-storage-util";
import { Despesa } from "../model/despesa";

@Injectable({
  providedIn: 'root',
})
export class DespesaStorageService {
  despesas!: Despesa[];

  constructor(){
    this.despesas = WebStorageUtil.get(Constants.EXPENSES_KEY);
  }

  save(despesa: Despesa) {
    this.despesas = WebStorageUtil.get(Constants.EXPENSES_KEY);
    this.despesas.push(despesa);
    WebStorageUtil.set(Constants.EXPENSES_KEY, this.despesas);
  }

  getDespesas(): Despesa[] {
    this.despesas = WebStorageUtil.get(Constants.EXPENSES_KEY);
    return this.despesas;
  }
}
