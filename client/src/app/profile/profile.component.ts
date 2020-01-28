import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Object;


  constructor(private _http: HttpService) { }

  ngOnInit() {
    return this._http.getProfiles().subscribe(data => {
      this.profile = data
      console.log(this.profile)
    })
  }

}
