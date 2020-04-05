import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';
import { Menu } from '../../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus: Menu [] = [];

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
