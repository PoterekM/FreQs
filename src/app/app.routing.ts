import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
