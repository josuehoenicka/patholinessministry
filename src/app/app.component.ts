import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cards: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.cards = [
      {
        title: "Title",
        subtitle: "Description here"
      },
      {
        title: "Title",
        subtitle: "Description here"
      },
      {
        title: "Title",
        subtitle: "Description here"
      }
    ]
  }
}
