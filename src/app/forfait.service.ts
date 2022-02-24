import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Forfait } from './Forfait';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitsUrl = 'http://localhost:5000/forfaits';
  
  constructor(private http:HttpClient){ }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(this.forfaitsUrl);
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);
  }

  editForfait(forfait: Forfait): Observable<Forfait> {
    const url = `${this.forfaitsUrl}/${forfait.id}`;
    return this.http.put<Forfait>(url, forfait, httpOptions);
  }

  deleteForfait(forfait: Forfait): Observable<Forfait> {
    const url = `${this.forfaitsUrl}/${forfait.id}`;
    return this.http.delete<Forfait>(url);
  }
}
