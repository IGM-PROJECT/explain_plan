import { Component, Input, OnInit } from '@angular/core';
import { PurpleAttribute, Root } from 'src/app/shared/model/explain-plan-obj';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() explain_child: Root;
  plu: PurpleAttribute = {};
  constructor() { }

  ngOnInit(): void {
    this.explain_child.attributes.forEach((eve)=> {
      let name = Object.keys(eve)[0];
      this.plu[name] = eve[name];
    });
    this.plu['costo']=Math.round(
      100 * (Number(this.plu["Total-Cost"]) - Number(this.plu["Startup-Cost"]))
    ) / 100;
  }

}
