import { Component, input, output } from '@angular/core';

import { ArticleService, ArticleInterface } from '../article.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articleSelected = output<boolean>()

  constructor (public articleService: ArticleService) {}

  onCloseClick() {
    this.articleService.articleSelected.set(undefined)
    this.articleSelected.emit(false);
  }
}
