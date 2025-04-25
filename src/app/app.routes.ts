import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { UsersshowComponent } from './components/usersshow/usersshow.component';
import { ShopsshowComponent } from './components/shopsshow/shopsshow.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersshowComponent},
    {path: 'shops', component: ShopsshowComponent},
    
    {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [canActivateAuthRole],
        data: {role: 'view-profile'}
    },
    {path: 'forbidden', component: ForbiddenComponent},
    {path: '**', component:NotFoundComponent}
];
