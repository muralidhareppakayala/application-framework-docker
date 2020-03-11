import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardService } from './service/routeguard.service';
import { UserComponent } from './user/user.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'courses',component: CoursesComponent},
  {path: 'registration',component: UserComponent},
    //{path: 'login',component: LoginComponent},
    {path: 'welcome/:name',component: WelcomeComponent, canActivate:[RouteguardService]},
    {path: 'todos', component : ListTodosComponent,canActivate:[RouteguardService]},
    
    {path: 'logout',component: LogoutComponent, canActivate:[RouteguardService]},

    //{path: 'welcome',component: WelcomeComponent},
    {path: '**',component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
