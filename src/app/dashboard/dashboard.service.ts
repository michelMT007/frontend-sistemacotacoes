import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../../../src/app/shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://sistema-cotacao-santander.herokuapp.com';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
