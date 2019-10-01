import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment.prod";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { ExamTableComponent } from "./exam-table/exam-table.component";
import { AddScoreComponent } from "./components/add-score/add-score.component";
import { ExamRoundTableComponent } from './exam-round-table/exam-round-table.component';

@NgModule({
  declarations: [AppComponent, ExamTableComponent, AddScoreComponent, ExamRoundTableComponent],
  imports: [
    AngularFireStorageModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
