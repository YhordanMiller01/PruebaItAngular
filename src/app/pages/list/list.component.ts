import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filterCategory: string[] = [
    "science",
    "people",
    "feelings",
    "computer",
    "buildings"
  ];
  cards: Card[] = [];
  offset = 0;
  cardText = new FormControl('');
  carSelect = new FormControl();


  constructor(private cardService:CardService){ }

  ngOnInit():void {

    this.cardText.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe((res)=>{
      this.cards = [];
      this.searchCards(res);
    });

    this.carSelect.valueChanges.pipe(
    ).subscribe((res)=>{
      this.cards = [];
      this.changeWebsite(res);
    });

    this.searchCards();
  }

  /**
   *
   */
  onScroll() {
    this.offset += 20;
    this.searchCards();
  }

  /**
   *
   * @param eCategory
   */
  changeWebsite(eCategory:any| null = null) {
    if(eCategory != null){
      this.cardService.getCardsSelect(eCategory, this.offset).subscribe((res) => {
        console.log(res);
        this.cards = [...this.cards,...res];
      });
    }
  }

  /**
   *
   * @param qsearch
   */
  searchCards(qsearch:string | null = null)  {
    this.cardService.getCards(qsearch, this.offset).subscribe((res) => {
      //this.cards = res;
      this.cards = [...this.cards,...res];
    });
  }

}
