import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-exam-table",
  templateUrl: "./exam-table.component.html",
  styleUrls: ["./exam-table.component.css"]
})
export class ExamTableComponent implements OnInit {
  items: any[];
  constructor(db: AngularFirestore) {
    db.collection("exam-score")
      .valueChanges()
      .subscribe((value: any[]) => {
        this.items = value;
        this.items.sort(function compare(a, b) {
          if (a.score > b.score) {
            return -1;
          }
          if (a.score < b.score) {
            return 1;
          }
          return 0;
        });
      });
  }

  ngOnInit() {}
}
