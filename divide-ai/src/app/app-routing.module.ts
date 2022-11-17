import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaAboutComponent } from './tela-about/tela-about.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaDespesasComponent } from './tela-despesas/tela-despesas.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { ResultComponentComponent } from './tela-despesas/result-component/result-component.component';

const routes: Routes = [
  {path: 'inicio', component: TelaInicioComponent},
  { path: 'adicionarDespesa', component: TelaCadastroComponent },
  {
    path: 'listaDespesas', component: TelaDespesasComponent,
    children: [
      {
        path: 'resultado',
        component: ResultComponentComponent,
      },
    ],
  },
  { path: 'about', component: TelaAboutComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
