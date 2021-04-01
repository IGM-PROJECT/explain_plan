import { Component, Input, OnInit } from "@angular/core";

import { Root } from "src/app/shared/model/explain-plan-obj";
@Component({
  selector: "app-display-tree",
  templateUrl: "./display-tree.component.html",
  styleUrls: ["./display-tree.component.scss"],
})
export class DisplayTreeComponent implements OnInit {
  @Input() explain_child: Root;
  constructor() {}

  ngOnInit(): void {
  }
}
