import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExpenseRegisterComponent } from './expense-register/expense-register.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { LandPageComponent } from './land-page/land-page.component';
import { ResultComponentComponent } from './expenses/result-component/result-component.component';

const routes: Routes = [
  {path: 'inicio', component: LandPageComponent},
  { path: 'adicionarDespesa', component: ExpenseRegisterComponent },
  {
    path: 'listaDespesas', component: ExpensesComponent,
    children: [
      {
        path: 'resultado',
        component: ResultComponentComponent,
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
