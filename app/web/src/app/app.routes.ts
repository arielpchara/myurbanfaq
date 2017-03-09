import {RouterModule, Routes} from '@angular/router';
import {FaqListComponent} from './faq-list/faq-list.component';
import {FaqComponent} from './faq/faq.component';
import {FaqCreateComponent} from './faq-create/faq-create.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{
        path: '', component: FaqComponent,
    },{
        path: 'new', component: FaqCreateComponent
    },{
        path: 'login', component: LoginComponent
    }];

export const routing = RouterModule.forRoot(routes);