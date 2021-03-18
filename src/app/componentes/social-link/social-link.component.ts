import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent implements OnInit {

  @Input() socialLink;

  constructor() { }

  ngOnInit(): void {
  }
}
