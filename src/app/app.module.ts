import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AllEmpComponent } from './all-emp/all-emp.component';
import { ParticularIdComponent } from './particular-id/particular-id.component';
import { EditComponent } from './edit/edit.component';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add-emp', component: AddEmpComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    LoginComponent,
    AllEmpComponent,
    ParticularIdComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatSortModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
