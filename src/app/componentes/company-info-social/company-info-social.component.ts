import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info-social',
  templateUrl: './company-info-social.component.html',
  styleUrls: ['./company-info-social.component.css']
})
export class CompanyInfoSocialComponent implements OnInit {

  @Input() companySocial:Map<string, string>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.companySocial);
  }

  getCompanySocial(){
    return this.companySocial;
  }

  getKeys(){
    return Array.from(this.companySocial.keys());
  }
}
