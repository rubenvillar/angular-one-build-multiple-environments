import { Component } from '@angular/core';
import { DynamicConfigurationService } from './shared/dynamic-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  public apiUrl: string;

  constructor(private dynamicConfigurationService: DynamicConfigurationService) { }

  ngOnInit() {
    this.apiUrl = this.dynamicConfigurationService.getApiUrl();
  }
}
