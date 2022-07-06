import {Component, OnInit} from '@angular/core';
import {Link} from "./link.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public linkHolder: Link[] = [
    {link: 'option-1', name: 'Dynamic Child'},
    {link: 'option-2', name: 'Parent Structure'},
    {link: 'option-3', name: 'Dynamic Form'},
    {link: 'option-4', name: 'ngx-formly'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
