import { Component, Input, OnInit } from '@angular/core';
import { Root } from 'src/app/shared/model/explain-plan-obj';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() explain_child: Root;
  constructor() { }

  ngOnInit(): void {
  }

}
