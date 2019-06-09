import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DynamicConfigurationService {
  private static readonly configurationFilePath =
    "assets/config/app-config.json";
  private configuration: Configuration;

  constructor(private httpClient: HttpClient) { }

  public loadConfiguration() {
    return from(
      this.httpClient.get<Configuration>(
        DynamicConfigurationService.configurationFilePath
      )
    )
      .pipe(
        map(config => {
          this.configuration = config;
          return;
        })
      )
      .toPromise();
  }

  public getApiUrl(): string {
    return this.configuration.apiUrl;
  }
}
