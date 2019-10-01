import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: "app-exam-round-table",
  templateUrl: "./exam-round-table.component.html",
  styleUrls: ["./exam-round-table.component.css"]
})
export class ExamRoundTableComponent implements OnInit {
  rankOne: any = [];
  rankTwo: any = [];
  intermediate: any = [];
  notExam: any = [];
  constructor(db: AngularFirestore) {
    db.collection("exam-one")
      .valueChanges()
      .subscribe((value: any[]) => {
        this.rankOne = value.filter(({ score }) => score > 0 && score < 33);
        this.rankTwo = value.filter(({ score }) => score > 33 && score <= 66);
        this.intermediate = value.filter(({ score }) => score > 66);
        this.notExam = value.filter(({ score }) => score < 0);
      });
  }

  ngOnInit() {}
}
