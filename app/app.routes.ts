import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentAddComponent } from './student/student-add.component';
import { StudentEditComponent } from './student/student-edit.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: $localize`:@@home.index.headline:Welcome to your new app!`
  },
  {
    path: 'students',
    component: StudentListComponent,
    title: $localize`:@@student.list.headline:Students`
  },
  {
    path: 'students/add',
    component: StudentAddComponent,
    title: $localize`:@@student.add.headline:Add Student`
  },
  {
    path: 'students/edit/:id',
    component: StudentEditComponent,
    title: $localize`:@@student.edit.headline:Edit Student`
  },
  {
    path: 'error',
    component: ErrorComponent,
    title: $localize`:@@error.headline:Error`
  },
  {
    path: '**',
    component: ErrorComponent,
    title: $localize`:@@notFound.headline:Page not found`
  }
];
