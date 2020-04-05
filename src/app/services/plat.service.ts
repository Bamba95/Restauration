import { Injectable } from '@angular/core';
import { Plat } from '../models/plat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }

  public addPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>('http://localhost:1337/plats', plat).pipe();
  }

  public deletePlat(id: number): Observable<Plat> {
    return this.http.delete<Plat>('http://localhost:1337/plats/' + id).pipe();
  }

  public update(plat: Plat): Observable<Plat> {
    return this.http.put<Plat>('http://localhost:1337/plats/' + plat.id, plat).pipe();
  }

  public getAll(): Observable<Plat[]> {
    return this.http.get<Plat[]>('http://localhost:1337/plats').pipe();
  }

  public getPlat(id: number): Observable<Plat> {
    return this.http.get<Plat>('http://localhost:1337/plats/' + id);
  }

}

