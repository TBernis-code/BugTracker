import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../@shared/models/bug';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.scss']
})
export class FormtestComponent {

  addBugForm: FormGroup;
  @Output() newBugEvent = new EventEmitter<Partial<Bug>>();

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.createForm();
    }

    onSubmit() {
        const title = this.addBugForm.get("title").value;
        const description = this.addBugForm.get("description").value;
        const status = this.addBugForm.get("status").value;
        const bug: Partial<Bug> = { title: title, description: description, status: status };
        this.newBugEvent.emit(bug);
    }

    
        
    private createForm() {
        this.addBugForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: [''],
            status: ['']
        })
    }
}
