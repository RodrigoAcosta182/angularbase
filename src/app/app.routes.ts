import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/pages/blog.component').then((m) => m.BlogPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact.component').then(
        (m) => m.ContactPage
      ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
