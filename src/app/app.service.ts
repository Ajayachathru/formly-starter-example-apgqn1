import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlankingMachineData, MaterialData, TransferMachineData } from './app.interface';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getMaterials(): Observable<MaterialData[]> {
    return this.http.get('assets/json/materials.json') as Observable<
      MaterialData[]
    >;
  }

  getMachines(): Observable<TransferMachineData[]> {
    return this.http.get('assets/json/transfer_machine.json') as Observable<
      TransferMachineData[]
    >;
  }

  getBlankingMachines(): Observable<BlankingMachineData[]> {
    return this.http.get('assets/json/offline_blanking.json') as Observable<
    BlankingMachineData[]
    >;
  }
}
