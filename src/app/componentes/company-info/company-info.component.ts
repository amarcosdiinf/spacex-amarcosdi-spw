import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  companyInfo;
  constructor(private companyInfoService: CompanyService) { }

  ngOnInit(): void {
    this.companyInfo = this.companyInfoService.getCompanyInfo();
  }

  getCompanyInfo(){
    return this.companyInfo;
  }

}
