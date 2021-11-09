import { Component } from '@angular/core';
import { Bug } from './@shared/models/bug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  bugs: Bug[] = [];

  title = 'BugTracker';

  addBug(newBug: Bug) {
    this.bugs.push(newBug as Bug);
    console.log('ok');
    console.log(this.bugs);
  }

}



