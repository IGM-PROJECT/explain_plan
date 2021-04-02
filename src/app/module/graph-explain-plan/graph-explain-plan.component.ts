import { Component, OnInit } from "@angular/core";
import { ExplainObjService } from "src/app/service/explain-obj.service";
import {
  PurpleAttribute,
  Root,
  ExplainPlanObj,
} from "src/app/shared/model/explain-plan-obj";

@Component({
  selector: "app-graph-explain-plan",
  templateUrl: "./graph-explain-plan.component.html",
  styleUrls: ["./graph-explain-plan.component.scss"],
})
export class GraphExplainPlanComponent implements OnInit {
  explain_pla: ExplainPlanObj;
  constructor(private _planService: ExplainObjService) {}

  ngOnInit(): void {
    // this.explain_pla = this._planService.getExplainPlan();
    //console.log(this.explain_pla.root[0])
  }
  clearData() {
    this.explain_pla = null;
  }

  cargarArchivo(ev: Event) {
    //console.log(ev);
    let file = ev.target["files"][0];
    var readFile = new FileReader();
    readFile.onload =  (e)=> {
      let contents: string = String(e.target.result);
      this.explain_pla= JSON.parse(contents);
    };
    readFile.readAsText(file);
  }
}
