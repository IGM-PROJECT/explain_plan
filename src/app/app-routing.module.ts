import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GraphExplainPlanComponent } from "./module/graph-explain-plan/graph-explain-plan.component";

const routes: Routes = [
  { path: "home", component: GraphExplainPlanComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
