import { RouterModule, Routes } from '@angular/router';
import { CadastraUsersComponent } from './cadastra-users/cadastra-users.component';
import { ListarComponent } from './listar/listar.component';

const appRoutes: Routes = [
    { path: '', component: ListarComponent },
    { path: 'cadastro', component: CadastraUsersComponent },
    { path: '**', component: ListarComponent }
];

export const routing = RouterModule.forRoot(appRoutes);