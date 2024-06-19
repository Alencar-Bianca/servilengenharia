import { Component } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
