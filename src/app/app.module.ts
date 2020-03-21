import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TransactionsComponent } from "./Components/Transactions/transactions.component";
import { TransactService } from "./Services/TransactService";
@NgModule({
  declarations: [AppComponent, TransactionsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TransactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
