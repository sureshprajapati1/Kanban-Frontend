import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth.guard';
import { CanDeactivateGuard } from './service/can-deactivate.guard';
import { UpdateKanbanComponent } from './update-kanban/update-kanban.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "DashBoard", component: DashBoardComponent,canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: "updateKanban/:kanban", component: UpdateKanbanComponent,canActivate: [AuthGuard] },
  { path: "member", component: MembersComponent,canActivate: [AuthGuard] },

  { path: "forgotPassword", component: ForgotpasswordComponent },
  { path: "PageNotFound", component: PageNotFoundComponent },
  
  {
    path: "",
redirectTo: "home",
    pathMatch: "full"
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
