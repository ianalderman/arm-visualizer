import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExplorerComponent } from './explorer/index';
import { MonacoComponent } from './monaco/index';
import { TemplateService } from '../shared/index';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
  directives: [ExplorerComponent, MonacoComponent]
})
export class EditorComponent implements OnInit {
  constructor(
    private router: Router,
    private templateService: TemplateService) { }

  ngOnInit() {
    let loadIndex = this.router.url.indexOf('?load=');
    if (loadIndex > -1) {
      let url: string = this.router.url.substr(loadIndex + 6);
      console.log(url);
      this.templateService.loadTemplateFromUrl(url);
    }
  }
}
