import { Component, OnInit } from "@angular/core";
import { ExplainObjService } from "src/app/service/explain-obj.service";
import { PurpleAttribute, Root,ExplainPlanObj } from "src/app/shared/model/explain-plan-obj";

@Component({
  selector: "app-graph-explain-plan",
  templateUrl: "./graph-explain-plan.component.html",
  styleUrls: ["./graph-explain-plan.component.scss"],
})
export class GraphExplainPlanComponent implements OnInit {
  explain_pla: ExplainPlanObj;
  constructor(private _planService: ExplainObjService) {}

  ngOnInit(): void {
    this.explain_pla = this._planService.getExplainPlan();
    //console.log(this.explain_pla.root[0])
  }



}
