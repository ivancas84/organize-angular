import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]

})
export class MenuComponent {

  public isCollapsed = false;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
