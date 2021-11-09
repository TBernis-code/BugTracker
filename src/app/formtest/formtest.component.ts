import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../@shared/models/bug';
import { BugService } from '../@shared/models/services/bug.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.scss']
})
    
export class FormtestComponent {

    id = -1;

  addBugForm: FormGroup;
  //@Output() newBugEvent = new EventEmitter<Partial<Bug>>();

    constructor(
        private bugService: BugService,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar
    ) {
        this.createForm();
    }

    onSubmit() {
        //const _id = this.incrId();
        const title = this.addBugForm.get("title").value;
        const description = this.addBugForm.get("description").value;
        const status = this.addBugForm.get("status").value;
        const bug: Partial<Bug> = { title: title, description: description, status: status };
        this.bugService.create(bug).subscribe(res => {
            console.log('bug created!')
         })
        this._snackBar.open("Bug crée", "ok");
    }

        
    private createForm() {
        this.addBugForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: [''],
            status: ['']
        })
    }
}
