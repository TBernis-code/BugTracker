import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../@shared/models/bug';
import { BugService } from '../@shared/models/services/bug.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
    
export class NameEditorComponent implements OnInit {

  id = null;
  bugs: Bug[] = [];

  ngOnInit() {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.bugService.getAll().subscribe((data: Bug[])=>{
      console.log(data);
      this.bugs = data;
      for (var i = 0; i < this.bugs.length; i++) {
        if (this.id == this.bugs[i]._id) {
          (<HTMLInputElement>document.getElementById('t1')).value = this.bugs[i].title;
          (<HTMLInputElement>document.getElementById('d1')).value = this.bugs[i].description;
        }
      }
    })  
  }


  addBugForm: FormGroup;

    constructor(
        private bugService: BugService,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private router: Router
    ) {
        this.updateForm();
    }

    onSubmit() {
        const title = this.addBugForm.get("title").value;
        const description = this.addBugForm.get("description").value;
        const status = this.addBugForm.get("status").value;
        const bug: Partial<Bug> = { title: title, description: description, status: status };
        this.bugService.update(this.id, bug).subscribe(res => {
          console.log('bug created!');
          this._snackBar.open("Bug modifié", "ok");
          this.router.navigate(['/bug-list']);
         })
    }

        
    private updateForm() {
        this.addBugForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: [''],
            status: ['']
        })
    }
}
