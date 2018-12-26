import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SpinnerLoadingIndicatorComponent } from './spinner-loading-indicator/spinner-loading-indicator.component';


export const MATERIAL_MODULES = [
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerLoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
