import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbiesParentComponent } from './hobbies-parent/hobbies-parent.component';
import { HobbiesChild1Component } from './hobbies-child1/hobbies-child1.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormChildComponent } from './form-child/form-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbiesParentComponent,
    HobbiesChild1Component,
    StrikethroughDirective,
    DateCountPipe,
    FormChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
