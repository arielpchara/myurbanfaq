import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder = "Buscar por ...";
  @Output() searching = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  inputKeyUp(value) {
    this.searching.emit(value);
  }
}
