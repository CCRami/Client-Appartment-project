import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/app/residence/residence.model';

@Injectable({
  providedIn: 'root' //une seule instance de ce service pour toute l'application
})
export class ResidenceService {

  constructor(private _http:HttpClient) { }
  getAll(): Observable<Residence[]>{
    return this._http.get<Residence[]>('http://localhost:3000/residences');
  }
  getById(id: string): Observable<Residence>{
    return this._http.get<Residence>('http://localhost:3000/residences?id='+id);
  }
}
