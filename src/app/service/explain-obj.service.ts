import { Injectable } from "@angular/core";
import { ExplainPlanObj } from "../shared/model/explain-plan-obj";
import * as data from './explain.json';



@Injectable({
  providedIn: "root",
})
export class ExplainObjService {
  private _explain_plan: ExplainPlanObj = data['default'];
  constructor() {
		console.log(data);
	}

  getExplainPlan(): ExplainPlanObj {
    return this._explain_plan;
  }
}
