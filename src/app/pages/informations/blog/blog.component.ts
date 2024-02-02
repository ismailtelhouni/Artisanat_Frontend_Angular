import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en'); // Set default language
    translateService.use('en'); // Use a specific language
  }
}
