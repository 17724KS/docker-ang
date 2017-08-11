import { Component, OnInit } from '@angular/core';
import {DockerService} from '../service/docker.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DockerService]
})
export class SearchComponent implements OnInit {
  public searchResult: any[];
  public tag;
  public architecture;
  public schemaVersion;
  public versions;
  name: string;
  toggle: boolean;
  // public history.Image;
   
   constructor(private router: Router, private dockerService: DockerService ) { }

  ngOnInit() {
    
  }
  getImage() {
      this.dockerService.getImages().subscribe(
      res => {
        this.searchResult = res.repositories;
        console.log(this.searchResult);
              }
    );
  }
  
  getInf(val) {
    console.log(val);
    this.dockerService.getInfo(val).subscribe(
    res => {
      this.tag = res.tag;
      this.architecture = res.architecture
      this.schemaVersion = res.schemaVersion;
    })
    this.name = val;
    this.toggle = true;
  }
  
  getVer(val) {
    console.log(val);
    this.dockerService.getVersions(val).subscribe(
    res => {
      this.versions = res.tags
      this.name = res.name;
      console.log(res.tags);
      this.toggle = false;
    })
  }
  
  getDelete(image, version) {
    console.log(image, version);
    this.dockerService.getDelete(image, version).subscribe(
    res => {
      console.log(res.json());
    })
  }

}
