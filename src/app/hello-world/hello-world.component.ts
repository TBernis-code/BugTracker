import { Component, OnInit } from '@angular/core';
import { BugService } from '../@shared/models/services/bug.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor(public bugService: BugService) { }

  ngOnInit(): void {
  }

  //slides = this.bugService.slides;

  public currentSlide = 0;
  
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.bugService.slides.length - 1 : previous;
    console.log(this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.bugService.slides.length ? 0 : next;
    console.log(this.currentSlide);
  }

}
