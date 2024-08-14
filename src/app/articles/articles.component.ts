import { Component, input, output } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { ArticleService, ArticleInterface } from '../article.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  isContactForm = input<boolean>(false)
  articleSelected = output<boolean>()
  name = '';
  email = '';
  message = '';

  constructor (public articleService: ArticleService) {}

  onCloseClick() {
    this.articleService.articleSelected.set(undefined)
    this.articleSelected.emit(false);
  }

  onSubmitClick(eventData: any) {
    console.log(eventData)
    console.log('Name: ' + this.name + ' Email: ' + this.email + ' Message: ' + this.message);
    return false;
  }
}
