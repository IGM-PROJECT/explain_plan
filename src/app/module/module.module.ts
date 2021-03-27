import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { GraphExplainPlanComponent } from './graph-explain-plan/graph-explain-plan.component';
import { CardComponent } from './graph-explain-plan/card/card.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, GraphExplainPlanComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { }
