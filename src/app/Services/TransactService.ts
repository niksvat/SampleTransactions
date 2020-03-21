import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TransactService {
  constructor(private http: HttpClient) {}

  url: String = "http://starlord.hackerearth.com/bankAccount";

  getList() {
    return this.http.get("http://starlord.hackerearth.com/bankAccount");
  }
  getList1() {
    return this.url;
  }
}
