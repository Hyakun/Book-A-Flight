import { Component, OnInit } from '@angular/core';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  icons = {yt:faYoutube, ig:faInstagram, fb:faFacebook};

  constructor() { }

  ngOnInit(): void {
  }

}
