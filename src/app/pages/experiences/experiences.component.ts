import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface job {
  company: string;
  logo: string;
  location: string;
  start: string;
  end: String;
  duration: string;
  tittle: string;
  desc: string;
  linkedin: string;
  website: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  jobs: Array<job> = [
    {company: "KBRW", logo: "assets/logo-kbrw.jpeg", location: "Paris, France", start: "Mar. 2021", end: "Present", duration: "", tittle: "Software Engineer", desc: "Maintained and improved 5 full stack projects used by 400k customers and managed more than 1 millions orders yearly.", linkedin: "https://www.linkedin.com/company/kbrw/mycompany/", website: "https://www.kbrw.fr/"},
    {company: "CaptainData", logo: "assets/captain_logo.png", location: "Paris, France", start: "Sep. 2020", end: "Mar. 2021", duration: "6 months", tittle: "Software Engineer", desc: "Developing and refactoring features on a micro-services architecture using Flask, Node.js, Angular and Google Cloud Platform.", linkedin: "https://www.linkedin.com/company/captaindata", website: "https://www.captaindata.co"},
    {company: "Alten SO", logo: "assets/alten_logo.png", location: "Toulouse, France", start: "Sep. 2018", end: "Aug. 2019", duration: "1 year", tittle: "Software Engineer Intern & Project Manager", desc: "Created and maintained a Node.js / Angular application to manage the facilities of the 3000 employees office.", linkedin: "https://www.linkedin.com/company/alten/", website: "https://www.alten.com"},
    {company: "Novatim", logo: "assets/novatim_logo.png", location: "Paris, France", start: "Sep. 2017", end: "Dec. 2017", duration: "4 months", tittle: "Software Developer Intern", desc: "Developed new features of an inner application using Asp.Net.", linkedin: "https://www.linkedin.com/company/novatim/", website: "https://www.novatim.com"},
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
