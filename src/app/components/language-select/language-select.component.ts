import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Default language
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Retrieve the selected language from localStorage
    translate.use(this.selectedLanguage); // Use the stored language
  }



  selectedLanguage: any = 'en'; // Default language

  onLanguageChange(selectedValue:string) {
    // Extract the selected value from the event
    // const selectedValue = (event.target as HTMLSelectElement).value;

    // Update the selected language
    this.selectedLanguage = selectedValue;

    // Implement additional logic if needed
    console.log('Selected Language:', this.selectedLanguage);

    // Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', selectedValue);

    this.translate.use(selectedValue);
  }

}
