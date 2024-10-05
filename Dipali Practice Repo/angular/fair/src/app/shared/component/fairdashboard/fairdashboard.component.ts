import { Component, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/models/fair.interface';

@Component({
  selector: 'app-fairdashboard',
  templateUrl: './fairdashboard.component.html',
  styleUrls: ['./fairdashboard.component.scss']
})
export class FairdashboardComponent implements OnInit {
  fairsarr:Array<Ifairs>=[
    {
      "fairId": "62f63b4caa0bf10009d0d86a",
      "fairName": "ISS Washington DC Fair",
      "startDate": 1675922400,
      "endDate": 1676181600,
      "timezoneId": "Eastern Standard Time",
      "location": {
        "addressOne": "Grand Hyatt Washington",
        "addressTwo": "1000 H Street NW",
        "city": "Washington D.C.",
        "state": "Washington D.C.",
        "country": "United States",
        "zip": "20001"
      },
      "numberOfUsersRegistered": 0,
      "numberOfSchoolsRegistered": 50,
      "isCandidateRegistered": false,
      "bannerUrl": "https://plus.unsplash.com/premium_photo-1680836316227-ef17dbbcfb27?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "showRegisteredUsersToCandidate": false,
      "showRegisteredUsersToSchools": false,
      "showRegisteredSchoolsToCandidate": true,
      "showRegisteredSchoolsToSchools": false,
      "fairStatus": "published",
      "fairStartTime": "8:00 AM",
      "fairEndTime": "12:00 PM",
      "type": "InPerson",
      "candidateDescription": "<p class=\"xparagraph\"><span class=\"xnormaltextrun\">We are excited to welcome you to Washington DC as we&#10;return to our annual Fair following the AAIE conference. To help launch or&#10;further your international education career, join us to meet international school&#10;leaders, follow school presentations and workshops and receive support on&#10;making recruitment easier for you. This conference draws hundreds of candidates&#10;and recruiters alike, from all over the globe. Come join us and let Washington&#10;DC work its magic for you!</span><span class=\"xeop\">&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b><u><br></u></b></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b><u>WASHINGTON DC FAIR SCHEDULE</u></b></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 9th</b></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS Event Check-in&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">1-5PM: School &amp; Candidate Pre-conference Workshops&#8239;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5:30-7:30PM: School Recruiter Welcome Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 10<sup>th</sup></b></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6:30PM: ISS Event Check-in</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #1</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">10:30AM-4:30PM: School Presentations</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: Interview Sign-ups</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span>&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 11<sup>th</sup></b></span><span class=\"normaltextrun\"><span>&#8239;</span></span><span class=\"eop\"><span>&#160;</span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS School and Candidate Office Open</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-5PM: Interview Day #1&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #2&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: School &amp; Candidate Networking Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 12<sup>th</sup> </b></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-12PM: ISS School and Candidate Office Open&#8239;</span><span class=\"eop\">&#160;</span></p><p class=\"paragraph\"><span>8AM-12PM: </span><span class=\"normaltextrun\">Interview Day #2&#8239;</span><span class=\"eop\">&#160;</span></p>",
      "schoolDescription": "<p class=\"xparagraph\"><span class=\"xnormaltextrun\">We are excited to welcome you to Washington DC as we&#10;return to our annual Fair following the AAIE conference. To help launch or&#10;further your international education career, join us to meet international school&#10;leaders, follow school presentations and workshops and receive support on&#10;making recruitment easier for you. This conference draws hundreds of candidates&#10;and recruiters alike, from all over the globe. Come join us and let Washington&#10;DC work its magic for you!</span><span class=\"xeop\">&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span><u><br></u></span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span><u>WASHINGTON DC FAIR SCHEDULE</u></span></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 9th</span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS Event Check-in&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">1-5PM: School &amp; Candidate Pre-conference Workshops&#8239;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5:30-7:30PM: School Recruiter Welcome Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 10<span>th</span></span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6:30PM: ISS Event Check-in</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #1</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">10:30AM-4:30PM: School Presentations</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: Interview Sign-ups</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span>&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 11<span>th</span></span></span><span class=\"normaltextrun\"><span>&#8239;</span></span><span class=\"eop\"><span>&#160;</span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS School and Candidate Office Open</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-5PM: Interview Day #1&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #2&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: School &amp; Candidate Networking Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 12<span>th</span> </span></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-12PM: ISS School and Candidate Office Open&#8239;</span><span class=\"eop\">&#160;</span></p><p class=\"xparagraph\"><span class=\"xeop\"></span></p><p class=\"paragraph\"><span>8AM-12PM: </span><span class=\"normaltextrun\">Interview Day #2&#8239;</span><span class=\"eop\">&#160;</span></p>"
    }
  ]
   selectedfair !:Ifairs
  selectedfairs: Ifairs | undefined;
  constructor() { }

  ngOnInit(): void {
    this.selectedfairs=this.fairsarr[0]
  }

}
