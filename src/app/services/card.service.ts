import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';
  constructor(private http:HttpClient) { }

  getCards(qsearch : string | null, offset = 0){
    const params : any = {
      per_page: 50,
      offset,
      //lang : 'es'
    }

    if(qsearch) params.q = qsearch;
    return this.http.get<Card[]>(this.API_URL,{ params }).pipe(
      map((res:any) => res.hits)

    );
    //return this.http.get<Card[]>(this.API_URL,{ params })
  }

  getCardsSelect(eCategory : string | null, offset = 0){
    const params : any = {
      per_page: 50,
      offset,
      //lang : 'es'
    }

    if(eCategory) params.category = eCategory;
    return this.http.get<Card[]>(this.API_URL,{ params }).pipe(
      map((res:any) => res.hits)
    );
    //return this.http.get<Card[]>(this.API_URL,{ params })
  }

  getCard(id : string){
    const params = {id}
    return this.http.get<Card>(this.API_URL,{params}).pipe(map((res:any) => res.hits[0]));
  }
}
