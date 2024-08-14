import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleButtonComponent } from './article-button/article-button.component';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, ArticleButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('startTextTransition',
      [
        state('false', style({opacity: 0})),
        state('true', style({opacity: 1})),
        transition('* <=> *', [ animate('3s 0s ease-out')]),
      ]
    ),
    trigger('startBgTransition',
      [
        state('false', style({opacity: 0, scale: 1})),
        state('true', style({opacity: 1, scale: 1.125})),
        transition('* <=> *', [ animate('3s 3s ease-out')]),
      ]
    ),
 ]
})
export class AppComponent implements AfterViewInit {
  startAnimation: boolean = false;
  articleShowing: boolean = false;
  contactButtonClicked: boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document, public articleService: ArticleService, private cdRef : ChangeDetectorRef) { 

  }

  ngAfterViewInit(): void {
    this.document.body.className = ''
    this.startAnimation = true;
    this.cdRef.detectChanges();
  }

  onArticleSelect($event: boolean) {
    if ($event) {
      console.log('article selected. Contact button clicked: ', this.contactButtonClicked);
      this.document.body.className = "is-article-visible";
      this.contactButtonClicked = false;
    } else {
      this.document.body.className = ""
      this.contactButtonClicked = false;
    }
  }

  onContactButtonClick() {
    this.articleService.articleSelected.set({'id': 99, 'name': 'Contact', 'html': ''});
    this.document.body.className = "is-article-visible"
    this.contactButtonClicked = true;
  }
}
