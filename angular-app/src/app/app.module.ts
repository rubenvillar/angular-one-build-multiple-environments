import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DynamicConfigurationService } from "./shared/dynamic-configuration.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    DynamicConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (
        dynamicConfigurationLoaderService: DynamicConfigurationService
      ) => () => dynamicConfigurationLoaderService.loadConfiguration(),
      deps: [DynamicConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
