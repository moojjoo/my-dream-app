import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'; // Import the standalone component

@NgModule({
  declarations: [
    // Leave empty or only put non-standalone components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }