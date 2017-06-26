import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { GenresComponent } from './components/genres/genres.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

//create router object
export const router:Routes =[
  //paths

    {path:'', component: HomeComponent},

  { path: 'api/books',   component: BooksComponent }, // path is appcomponent
  { path: 'api/genres', component: GenresComponent },
  { path: 'api/books/:id',   component: OverviewComponent },
  { path: 'books/add_book', component:  AddBookComponent},
  { path: 'books/edit_book/:id', component:  EditBookComponent}

];

//export constant
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
