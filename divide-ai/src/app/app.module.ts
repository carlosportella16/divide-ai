import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExpenseRegisterComponent } from './expense-register/expense-register.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NgxMaskModule } from 'ngx-mask';
import { ResultComponentComponent } from './expenses/result-component/result-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TotalExpensesComponent } from './expenses/total-expenses/total-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    ExpenseRegisterComponent,
    ExpensesComponent,
    ResultComponentComponent,
    TotalExpensesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
