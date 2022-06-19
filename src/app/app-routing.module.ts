import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutRoutes } from './about/about.routes';

import { tasksRoutes } from './tasks/tasks.routes';

const routes: Routes = [...tasksRoutes, ...aboutRoutes];

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
