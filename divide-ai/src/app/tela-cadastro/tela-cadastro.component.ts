import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/util/shared';
import { Despesa } from '../model/despesa';
import { DespesaStorageService } from './despesa-storage.service';


@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css'],
})
export class TelaCadastroComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  despesa!: Despesa;
  despesas!: Despesa[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private despesaService: DespesaStorageService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.despesa = new Despesa('','');
    this.despesas = this.despesaService.getDespesas();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.despesaService.save(this.despesa);

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.despesa = new Despesa('', '');

    this.despesas = this.despesaService.getDespesas();
  }
}
