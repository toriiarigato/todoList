import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() listItem;
  @Input() favouriteIcon;
  @Output() favouriteIconChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite(){
    this.listItem.favorite = !this.listItem.favorite;
    this.favouriteIcon = 'grade';
    this.favouriteIconChange.emit(this.favouriteIcon);
  }

}
