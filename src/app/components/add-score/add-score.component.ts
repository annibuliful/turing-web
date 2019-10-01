import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
@Component({
  selector: "app-add-score",
  templateUrl: "./add-score.component.html",
  styleUrls: ["./add-score.component.css"]
})
export class AddScoreComponent implements OnInit {
  name: string = "";
  score: string = "";
  uploadPercent: Observable<number>;
  imageURL: string = "";
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `${new Date()}-${event.target.files[0].name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe(image => {
            this.imageURL = image;
          })
        )
      )
      .subscribe();
  }
  submit() {
    this.db
      .collection("exam-score")
      .add({
        name: this.name,
        score: this.score,
        image: this.imageURL
      })
      .then(value => {
        this.name = "";
        this.score = "";
        this.imageURL = "";
      });
  }
  ngOnInit() {}
}
