import {RouterModule, Routes} from '@angular/router';
import {FaqListComponent} from './faq-list/faq-list.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{
        path: '', component: FaqListComponent,
    },{
        path: 'login', component: LoginComponent
    }];

export const routing = RouterModule.forRoot(routes);