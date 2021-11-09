import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bug } from '../@shared/models/bug';
import { BugService } from '../@shared/models/services/bug.service';



@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {

  ngOnInit() {
    this.getBugs();
  }

  //@Input() bug;
  bugs: Bug[] = [];


  displayedColumns: string[] = ['title', 'description', 'status'];

  constructor(private bugService: BugService) { }

  getBugs(): void {
    this.bugService.getAll().subscribe((data: Bug[])=>{
      console.log(data);
      this.bugs = data;
    })  
  }


  deleteBug(id) {
    this.bugService.delete(id).subscribe(() =>
    this.bugs = this.bugs.filter(b=>b._id != id)
    );
  }

  sendId(id) {
    //Ajout d'un objet dans la mémoire de l'ordinateur
    localStorage.setItem('id', id);
  }

}
