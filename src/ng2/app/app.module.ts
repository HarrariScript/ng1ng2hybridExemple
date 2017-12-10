import {BrowserModule} from '@angular/platform-browser';
import {NgModule,InjectionToken} from '@angular/core';
import {UpgradeModule, downgradeComponent} from '@angular/upgrade/static';

import {AppComponent} from './app.component';
import {Ng2ExempleComponent} from './ng2-exemple/ng2-exemple.component';
import {phoneServiceProvider} from './phones-service/phone.service';



@NgModule({
  declarations: [
    AppComponent,
    Ng2ExempleComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [phoneServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) {
  // }
  //
  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
  // }
}
