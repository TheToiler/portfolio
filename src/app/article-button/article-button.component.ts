import { Component, input, output } from '@angular/core';

import { ArticleService, ArticleInterface } from '../article.service';

@Component({
  selector: 'app-article-button',
  standalone: true,
  imports: [],
  templateUrl: './article-button.component.html',
  styleUrl: './article-button.component.css'
})
export class ArticleButtonComponent {
  article = input.required<ArticleInterface>()
  articleSelected = output<boolean>()

  constructor (public articleService: ArticleService) {}

  onArticleSelect() {
    this.articleService.articleSelected.set(this.article())
    this.articleSelected.emit(true);
  }
}
