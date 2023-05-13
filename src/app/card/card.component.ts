import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image!: string;

  constructor() { }

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354'
  }

}
