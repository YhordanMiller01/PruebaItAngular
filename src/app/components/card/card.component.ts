import { Component, OnInit,Input} from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
[x: string]: any;
  @Input() card! : Card;
  constructor(private router:Router){}
  ngOnInit():void {}

  goToCard(){
    this.router.navigate([`./card/${this.card.id}`]);
  }
}
