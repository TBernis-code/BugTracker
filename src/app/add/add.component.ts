import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Bug } from '../@shared/models/bug';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  {

    addBugForm: FormGroup;
    @Output() newBugEvent = new EventEmitter<Partial<Bug>>();

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.createForm();
    }

    submitBug() {
        const title = this.addBugForm.get("title").value;
        const description = this.addBugForm.get("description").value;
        const bug: Partial<Bug> = { title: title, description: description };
        this.newBugEvent.emit(bug);
    }

    
        
    private createForm() {
        this.addBugForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: ['']
        })
    }

}
