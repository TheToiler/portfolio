import { computed, effect, Injectable, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface ArticleInterface {
  id: number,
  name: string,
  html: string,
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleData: ArticleInterface[] = [
    {
      id: 0,
      name: 'Intro',
      html: `
			<h2 class="major">Intro</h2>
			<span class="image main"><img src="images/pic01.jpg" alt="" /></span>
			<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
            `
    },
    {
      id: 1,
      name: 'Work',
      html: `
			<h2 class="major">Work</h2>
			<span class="image main"><img src="images/pic02.jpg" alt="" /></span>
			<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
			<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
            `
    },
    {
      id: 2,
      name: 'About',
      html: `
			<h2 class="major">About</h2>
			<span class="image main"><img src="images/pic03.jpg" alt="" /></span>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
      `
    },
    {
      id: 3,
      name: 'Contact',
      html: `
			<h2 class="major">Contact</h2>
			<form method="post" action="#">
				<div class="fields">
					<div class="field half">
						<label for="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div class="field half">
						<label for="email">Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div class="field">
						<label for="message">Message</label>
						<textarea name="message" id="message" rows="4"></textarea>
					</div>
				</div>
				<ul class="actions">
					<li><input type="submit" value="Send Message" class="primary" /></li>
					<li><input type="reset" value="Reset" /></li>
				</ul>
			</form>
			<ul class="icons">
				<li><a href="https://github.com/TheToiler" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
			</ul>
			`
		},
  	];
  articleSelected = signal<ArticleInterface | undefined>(undefined);
  articleSelectedHTML = computed<SafeHtml>(() => this.domSanitizer.bypassSecurityTrustHtml(this.articleSelected()!.html));
  
  constructor(private domSanitizer: DomSanitizer) { }
}
