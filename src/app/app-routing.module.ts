// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { FormsComponent } from './pages/forms/forms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // <-- Import Dashboard

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // <-- Change redirect
      { path: 'dashboard', component: DashboardComponent }, // <-- Add dashboard route
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'forms', component: FormsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
