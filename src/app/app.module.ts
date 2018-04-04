import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {OnlyLoggedInUsersGuard} from './OnlyLoggedInUsersGuard';
import {UserService} from './UserService';
import {DataService} from './DataService';
import {CommentComponent} from './comment/comment.component';
import {ImageComponent} from './image/image.component';
import {HeaderbarComponent} from './headerbar/headerbar.component';
import {ImagelistComponent} from './imagelist/imagelist.component';
import { AddimageComponent } from './addimage/addimage.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PasswordDb } from './PasswordInMemoryRest';
import { PasswordService } from './passwordservice';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent,
  },
  {
    path: 'images',
    component: ImagelistComponent,
    canActivate: [OnlyLoggedInUsersGuard],
  },
  {
    path: 'addimage',
    component: AddimageComponent,
    canActivate: [OnlyLoggedInUsersGuard],
  },
  {
    path: 'pwreset',
    component: PasswordResetComponent,
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AddimageComponent,
    AppComponent,
    CommentComponent,
    ImageComponent,
    HeaderbarComponent,
    ImagelistComponent,
    LoginComponent,
    PageNotFoundComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PasswordDb)
  ],
  providers: [OnlyLoggedInUsersGuard, DataService, UserService, PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
