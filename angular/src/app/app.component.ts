import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'angular';
  
  ngAfterContentInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(s);
  }

}