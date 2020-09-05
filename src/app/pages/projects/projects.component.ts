import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface project {
  name: string;
  sdesc: string;
  logo: string;
  image: string;
  desc: string;
  repo: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects:  Array<project> = [
   {name: "Welon", sdesc: "Food waiste reducer tool for restaurants", logo: "assets/welon_logo.png", image: "assets/welon_image.png", desc: "desc", repo: "https://gitlab.com/eip_welon_2021/welon", url: "http://www.welon.fr"},
   {name: "Project H", sdesc: "Syncronise playlists on all platforms.", logo: "assets/project_h_logo.png", image: "assets/project_h_image.png", desc: "desc", repo: "https://github.com/lucas-naman/ProjectH", url: "https://front-service-dot-project-h-283916.ew.r.appspot.com/login"},
   {name: "L'Adresse Garage", sdesc: "One page web site for an old car garage", logo: "assets/ladresse-garage_logo.png", image: "assets/ladresse-garage_image.png", desc: "desc", repo: "#", url: "https://www.ladresse-garage.fr"},
   {name: "Portfolio", sdesc: "This web site", logo: "assets/portfolio_logo.png", image: "assets/portfolio_image.png", desc: "desc", repo: "", url: "#"},
  ] 

  constructor(private breakpointObserver: BreakpointObserver) { }

  public size = 400
  public isMobile : Boolean;

  ngOnInit() {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    this.breakpointObserver.observe(['(max-width: 500px)'])
    .subscribe(result => {
      if (result.matches) {
        this.size = 250;
      } else {
        this.size = 400;
      }
    });
  }
}
