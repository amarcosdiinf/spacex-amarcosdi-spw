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
    this.companyInfoService.getCompanyInfo().subscribe(datos => {
      this.companyInfo = datos;
      console.log(this.companyInfo);
    });
  }

  getCompanyInfo(){
    return this.companyInfo;
  }

}
