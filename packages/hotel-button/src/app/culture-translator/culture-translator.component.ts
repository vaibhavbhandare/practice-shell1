import { Component, OnInit } from '@angular/core';
import { cultureCoreInit } from '@orxe-culture/core';
import translation from '../../assets/locales/en-US.json';

@Component({
  selector: 'app-orxe-culture-translator',
  templateUrl: './culture-translator.component.html',
  styleUrls: ['./culture-translator.component.scss']
})
export class CultureTranslatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
