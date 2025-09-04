import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { FormsComponent } from './pages/forms/forms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ColorsComponent,
    TypographyComponent,
    ButtonsComponent,
    FormsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
