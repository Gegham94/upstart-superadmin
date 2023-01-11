import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { LangInterface } from 'src/app/core/interfaces/lang.interface';

declare var $: any;

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Input() isDark : boolean = false;

  public languages = [
    { value: 'en', viewValue: 'ENG', src: 'EN' },
    { value: 'hy', viewValue: 'ARM', src: 'AM' },
  ];

  private readonly destroyed$: Subject<void> = new Subject<void>();

  public selectedLang: string = '';

  public selectedLanguage: LangInterface | undefined;

  constructor(private readonly translateService: TranslateService) {}

  public ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    const language = this.languages.find((languageRes) => languageRes.value === lang);
    if (language) this.selectedLang = language.value;
  }

  public ngDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public changeLanguage(event: MatSelectChange) {
    localStorage.setItem('lang', event.value);
    this.translateService.use(event.value);
    location.reload();
  }
}
