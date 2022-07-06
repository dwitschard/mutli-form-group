import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: `
    <div class="lead pt-2 pb-5">
      <ng-content></ng-content>
    </div>
  `,
})
export class PageTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
