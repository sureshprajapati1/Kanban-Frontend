import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRippleModule} from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from "@angular/material/menu";
import {  MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from "@angular/material/paginator";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateKanbanComponent } from './update-kanban/update-kanban.component';
import { CreateUpdateStatusComponent } from './create-update-status/create-update-status.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { MembersComponent } from './members/members.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignedComponent } from './assigned/assigned.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteAssignedComponent } from './delete-assigned/delete-assigned.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashBoardComponent,
    PageNotFoundComponent,
    UpdateKanbanComponent,
    CreateUpdateStatusComponent,
    UpdateTaskComponent,
    MembersComponent,
    AssignedComponent,
    DeleteMemberComponent,
    HeaderComponent,
    ProfileComponent,
    ForgotpasswordComponent,
    AddTaskComponent,
    DeleteAssignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule, MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRippleModule,
    AppRoutingModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    CommonModule,
    MatDialogModule,
    MatTooltipModule,
    DragDropModule,
    MatPaginatorModule,
    ScrollingModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
