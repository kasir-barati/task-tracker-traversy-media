import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

/**
 * Correct usage:
 * - { path: '', ... }
 * - { path: 'about', ... }
 * Wrong usage:
 * Error: Invalid configuration of route '/': path cannot start with a slash
 * - { path: '/', ... }
 * - { path: '/about', ... }
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
