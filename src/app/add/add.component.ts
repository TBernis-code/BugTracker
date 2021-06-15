import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  {

    bookForm = new FormGroup({
        title: new FormControl(),
        description: new FormControl()
    });

    submitBook() {
        console.log(this.bookForm.value);
    }

}
