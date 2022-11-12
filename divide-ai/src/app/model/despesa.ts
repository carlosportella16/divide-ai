export class Despesa {
  id!: string;
  valor: string;
  descricao?: string;
  data: Date;

  constructor(valor: string, descricao?: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.valor = valor;
    this.descricao = descricao;
    this.data = new Date();
  }
}
