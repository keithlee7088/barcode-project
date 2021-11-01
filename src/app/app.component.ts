import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barcode-project';
  isLoginPage: boolean = false;

  constructor(public router: Router) {}

  
  async ngOnInit() { 
    // KL 20171211 - Temp fix for catering header CSS/Styles
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
        // window.scrollTo(0, 0);
        return;
      }

      if (event instanceof NavigationStart) {
        
        window.scrollTo(0, 0);

        switch (event.url) {
          case '':
          case '/':
          case '/login':
            this.isLoginPage = true;
            break;
          default:
            this.isLoginPage = false;
            break;
        }
      }
    });

  }
}
