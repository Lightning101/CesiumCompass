import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CesiumNav';
  viewer: any;
  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.viewer = new Cesium.Viewer(this.el.nativeElement, {});
    this.viewer.extend(Cesium.viewerCesiumNavigationMixin);
  }

}
