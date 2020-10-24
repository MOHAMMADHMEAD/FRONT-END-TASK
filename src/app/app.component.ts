import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digitallabs-frontend-assessment-angular';
  images = [
    {
      name: 'Jumehira Villa',
      url: '/assets/img/image1.svg',
      location: 'Dubai,Uae'
    },
    {
      name: 'Cumbaya Villa',
      url: '/assets/img/image2.svg',
      location: 'Quito, Ecuador'
    }
  ];
  currentImage:any={}
}
