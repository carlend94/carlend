import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./services/authGuard.service";
import {RoleSelectComponent} from "./role-select/role-select.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'role', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard]},
  { path: 'role', component: RoleSelectComponent}
];
