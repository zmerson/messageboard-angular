import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule  } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TaskListComponent } from './task-list/task-list/task-list.component';
import { TaskListModule } from './task-list/task-list.module';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsModule } from './posts/posts.module';
import { ItemsListComponent } from './items2/items-list/items-list.component';
import { ItemsDetailComponent } from './items/items-detail/items-detail.component';
import { ItemsModule } from './items2/items/items.module';
import { LoginComponent } from './login/login.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { D3Component } from './d3/d3.component';
// import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PublicComponent,

    TaskDialogComponent,
     PostFormComponent,
    //  ItemsListComponent,
     ItemsDetailComponent,
    LoginComponent,
    SignInModalComponent,
    CreateAccountComponent,
    D3Component,
    // CardComponent
  ],
  imports: [
    
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    TaskListModule,
    PostsModule,
    ItemsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
