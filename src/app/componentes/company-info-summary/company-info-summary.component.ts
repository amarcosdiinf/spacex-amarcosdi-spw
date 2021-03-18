import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info-summary',
  templateUrl: './company-info-summary.component.html',
  styleUrls: ['./company-info-summary.component.css']
})
export class CompanyInfoSummaryComponent implements OnInit {

  @Input() companyInfo;
  constructor() { }

  ngOnInit(): void {
  }

  getCompanyInfo(){
    return this.companyInfo;
  }

}
