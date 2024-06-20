import { Routes } from '@angular/router';
import { IndexComponent } from './project/pages/index/index.component';
import { ContactComponent } from './project/pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'contato',
        component: ContactComponent,
      },

    ]
  }
      // { path: '', component: IndexComponent },
  // { path: 'contato', component: ContactComponent },
];
