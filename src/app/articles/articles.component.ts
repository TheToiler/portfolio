import { Component, input, output } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { ArticleService, ArticleInterface } from '../article.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
  providers: [],
})
export class ArticlesComponent {
  isContactForm = input<boolean>(false)
  articleSelected = output<boolean>()
  name = '';
  email = '';
  message = '';

  constructor (public articleService: ArticleService, private http: HttpClient) {}

  onCloseClick() {
    this.articleService.articleSelected.set(undefined)
    this.articleSelected.emit(false);
  }

  onSubmitClick() {
    this.http.post('https://gerrits-thuis.nl/api/mailto', {name: this.name, email: this.email, message: this.message}).subscribe(response => {
      return
    })
    this.onCloseClick()
  }
}
