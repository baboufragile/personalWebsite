import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  constructor(private router: Router) {

  }

  btnClick = (pageName: string) => {
    this.router.navigate([`${pageName}`]);
  };

}
