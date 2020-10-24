import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  currentButton = 'next';
  @Input() images = [];
  @Output() selectedImage = new EventEmitter();
  index = 0;
  currentImage: any = {};

  constructor() {
  }

  ngOnInit(): void {
    if (this.images.length > 0) {
      this.currentImage = this.images[0];
      this.selectedImage.emit(this.currentImage);

    }
  }

  prvImg() {
    let prvIndex = this.index - 1;

    if (prvIndex > 0) {
      this.currentImage = this.images[prvIndex];
      this.selectedImage.emit(this.currentImage);
      this.index--;
    } else {
      this.currentImage = this.images[0];
      this.selectedImage.emit(this.currentImage);
      this.index = 0;
    }
    this.currentButton = 'prv';
  }

  nextImg() {
    let nextIndex = this.index + 1;
    if (this.images[nextIndex] && nextIndex < this.images.length) {
      this.currentImage = this.images[nextIndex];
      this.selectedImage.emit(this.currentImage);
      this.index++;
    }
    this.currentButton = 'next';
  }
}
