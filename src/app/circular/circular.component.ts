import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  images: string[];
  text: string;

  public happyText = 'Dockers Page'
  constructor() { }

 ngOnInit() {
    // this.happyText = 'Docker images ';
  }

  happier() {
    this.images = ['Ubuntu',
    'Centos 7',
    'Windows Server 2012']
  }
}


