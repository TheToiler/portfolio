import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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
  imports: [RouterOutlet, ArticlesComponent, ArticleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '[@startTransition]': 'isAnimating'
  },
  animations: [
    trigger('startTransition',
      [
        state('start', style({opacity: 0})),
        state('stop', style({opacity: 1})),
        transition('start => stop', [ animate('1s')]),
        transition('stop => start', [ animate('0.5s')]),
      ]
    )
  ]
})
export class AppComponent implements AfterViewInit {
  startAnimation: boolean = false;
  isAnimating: boolean = false;
  articleShowing: boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document, public articleService: ArticleService) { }

  ngAfterViewInit(): void {
    this.document.body.className = ''
    this.startAnimation = true;
    this.isAnimating = true;
  }

  onArticleSelect($event: boolean) {
    if ($event) {
      this.document.body.className = "is-article-visible"
    } else {
      this.document.body.className = ""
    }
  }
}
