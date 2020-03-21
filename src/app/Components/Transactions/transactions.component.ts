import { Component, OnInit } from "@angular/core";
import { TransactService } from "../../Services/TransactService";

@Component({
  selector: "Transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"]
})
export class TransactionsComponent implements OnInit {
  constructor(private ts: TransactService) {}

  ngOnInit() {
    this.ts.getList().subscribe(data => {
      console.log(data);
    });

    console.log(this.ts.getList());
  }
}
