import { Component, OnInit } from "@angular/core";
import { ExplainObjService } from "src/app/service/explain-obj.service";
import { PurpleAttribute, Root } from "src/app/shared/model/explain-plan-obj";

@Component({
  selector: "app-graph-explain-plan",
  templateUrl: "./graph-explain-plan.component.html",
  styleUrls: ["./graph-explain-plan.component.scss"],
})
export class GraphExplainPlanComponent implements OnInit {
  constructor(private _planService: ExplainObjService) {}

  ngOnInit(): void {
    this.cargarObjeto();
  }

  cargarObjeto(): void {
    //return;
    const explain_pla = this._planService.getExplainPlan();
    let tree = document.getElementById("tree");
    tree.innerHTML = "";
    let ul = document.createElement("ul");
    const a = document.createElement("a");
    a.innerHTML = explain_pla.sql;
    ul.appendChild(this.children(explain_pla.root[0]));
    tree.appendChild(a);
    tree.appendChild(ul);
  }

  children(objeto: Root): HTMLLIElement {
    const li = document.createElement("li");
    const a = document.createElement("a");
    let plu: PurpleAttribute = {};
    objeto.attributes.forEach((eve) => {
      let name = Object.keys(eve)[0];
      plu[name] = eve[name];
    });

    const costo =
      Math.round(
        100 * (Number(plu["Total-Cost"]) - Number(plu["Startup-Cost"]))
      ) / 100;

    if (objeto.name) {
      a.innerHTML = `name:${objeto.name}</br>`;
    }
    a.innerHTML += `
    coste:${plu["Startup-Cost"]}-${plu["Total-Cost"]} ;${costo}</br>
    tipo:${objeto.kind}/${objeto.type}`;
    if (objeto.cond) {
      a.innerHTML += `</br>cond:${objeto.cond}`;
    }
    if (plu["Join-Type"]) {
      a.innerHTML += `</br>join-type:${plu["Join-Type"]}`;
    }
    if (plu["Alias"]) {
      a.innerHTML += `</br>Alias:${plu["Alias"]}`;
    }
    if (plu["Parent-Relationship"]) {
      a.innerHTML += `</br>Parent-Relationship:${plu["Parent-Relationship"]}`;
    }
    if (plu["Parallel-Aware"]) {
      a.innerHTML += `</br>Parallel-Aware:${plu["Parallel-Aware"]}`;
    }
    if (plu["Plan-Rows"]) {
      a.innerHTML += `</br>Plan-Rows:${plu["Plan-Rows"]}`;
    }
    if (plu["Plan-Width"]) {
      a.innerHTML += `</br>Plan-Width:${plu["Plan-Width"]}`;
    }
    if (plu["Inner-Unique"]) {
      a.innerHTML += `</br>Inner-Unique:${plu["Inner-Unique"]}`;
    }
    if (plu["Hash-Cond"]) {
      a.innerHTML += `</br>Hash-Cond:${plu["Hash-Cond"]}`;
    }

    if (plu["Actual-Startup-Time"]) {
      a.innerHTML += `</br>Actual-Startup-Time:${plu["Actual-Startup-Time"]}`;
    }
    if (plu["Actual-Total-Time"]) {
      a.innerHTML += `</br>Actual-Total-Time:${plu["Actual-Total-Time"]}`;
    }
    if (plu["Actual-Rows"]) {
      a.innerHTML += `</br>Actual-Rows:${plu["Actual-Rows"]}`;
    }
    if (plu["Actual-Loops"]) {
      a.innerHTML += `</br>Actual-Loops:${plu["Actual-Loops"]}`;
    }
    if (plu["Hash-Buckets"]) {
      a.innerHTML += `</br>Hash-Buckets:${plu["Hash-Buckets"]}`;
    }
    if (plu["Original-Hash-Buckets"]) {
      a.innerHTML += `</br>Original-Hash-Buckets:${plu["Original-Hash-Buckets"]}`;
    }
    if (plu["Hash-Batches"]) {
      a.innerHTML += `</br>Hash-Batches:${plu["Hash-Batches"]}`;
    }
    if (plu["Original-Hash-Batches"]) {
      a.innerHTML += `</br>Original-Hash-Batches:${plu["Original-Hash-Batches"]}`;
    }
    if (plu["Peak-Memory-Usage"]) {
      a.innerHTML += `</br>Peak-Memory-Usage:${plu["Peak-Memory-Usage"]}`;
    }
    li.appendChild(a);
    if (objeto.child) {
      console.log(objeto.child);
      const ul = document.createElement("ul");
      for (const clildren of objeto.child) {
        ul.appendChild(this.children(clildren));
      }
      li.appendChild(ul);
    }
    return li;
  }
}
