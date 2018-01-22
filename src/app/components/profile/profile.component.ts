import { Component, OnInit } from '@angular/core';

// import profile services
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];
  username:string;

  constructor(private profileService: ProfileService) {
    
  }

  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
      
    });
  }

  ngOnInit() {
    
  }

}
