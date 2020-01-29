import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { LoginComponent } from './pages/login/login.component';
import { DashComponent } from './pages/dash/dash.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path : "dash",
    component : DashComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "teacher",
    component : TeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
