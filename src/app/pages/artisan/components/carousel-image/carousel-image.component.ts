import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ImageData } from 'src/app/models/product.model';
import { BackendConfigService } from 'src/app/services/apis/backend-config.service';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit{

  @Input() images:ImageData[]|undefined
  currentIndex: number = 0;

  backendHost = this.backendConfigService.getBackendHost();

  constructor(
    private backendConfigService: BackendConfigService,
  ) {}

  ngOnInit(): void {
    console.log(this.images)
  }

  next() {
    if(this.images)
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    if(this.images)
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  get currentImage(): string {
    if(this.images){
      return this.backendHost+'/'+this.images[this.currentIndex].path;
    }
    return ''
  }

}
