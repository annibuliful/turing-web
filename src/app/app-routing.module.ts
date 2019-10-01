import { NgModule } from "@angular/core";
import { ExamTableComponent } from "./exam-table/exam-table.component";
import { AddScoreComponent } from "./components/add-score/add-score.component";
import { ExamRoundTableComponent } from "./exam-round-table/exam-round-table.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: ExamTableComponent },
  { path: "add", component: AddScoreComponent },
  { path: "exam", component: ExamRoundTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
