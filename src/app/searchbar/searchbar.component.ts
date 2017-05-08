import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  filterText: string;

  constructor() { }

  ngOnInit() {
  }

  getFilterText() : string {
    return this.filterText;
  }

}
