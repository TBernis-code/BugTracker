import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bug } from '../@shared/models/bug';


@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnChanges {

  @Input() bug ;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('ok');
    console.log(changes.prop);
  }

}
