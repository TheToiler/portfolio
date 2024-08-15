import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
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
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ArticlesComponent,
    ArticleButtonComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('startTextTransition', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('* <=> *', [animate('3s 0s ease-out')]),
    ]),
    trigger('startBgTransition', [
      state('false', style({ opacity: 0, scale: 1.125 })),
      state('true', style({ opacity: 1, scale: 1.125 })),
      transition('* <=> *', [animate('3s 3s ease-out')]),
    ]),
    trigger('startArticleTransition', [
      state('true', style({scale: 1, filter: 'blur(0.2rem)' })),
      state('false', style({scale: 1.125, filter: 'blur(0rem)' })),
      transition('* <=> *', [animate('0.325s')]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  startAnimation: boolean = false;
  startArticleAnimation: boolean = false;
  contactButtonClicked: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public articleService: ArticleService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.document.body.className = '';
    this.startAnimation = true;
    this.cdRef.detectChanges();
  }

  onArticleSelect($event: boolean) {
    if ($event) {
      this.document.body.className = 'is-article-visible';
      this.startArticleAnimation = true;
      this.contactButtonClicked = false;
    } else {
      this.document.body.className = '';
      this.startArticleAnimation = false;
      this.contactButtonClicked = false;
    }
  }

  onContactButtonClick() {
    this.articleService.articleSelected.set({
      id: 99,
      name: 'Contact',
      html: '',
    });
    this.document.body.className = 'is-article-visible';
    this.startArticleAnimation = true;
    this.contactButtonClicked = true;
  }

  onGemClick() {
    console.log('Gem click!');
    // TODO: Verander deze methode om naar een login pagina te gaan.
    window.location.href = 'https://gerrits-thuis.nl/bitwarden'
  }
}
