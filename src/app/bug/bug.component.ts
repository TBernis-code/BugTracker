import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bug } from '../@shared/models/bug';



@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent {

  @Input() bug;

  displayedColumns: string[] = ['title', 'description', 'status'];

  constructor() { }

}
