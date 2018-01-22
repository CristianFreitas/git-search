import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http'; //import for use Http
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  // this information from the user
  private username:string;
  // this informations from the app github
  private clientid = 'e331c3149fb0a03e7c07';
  private clientsecret = '9b05c17475a60625e2dddc5e10b8094b6a075952';

  // static class call from Http
  constructor(private http:Http) { 

    console.log("service is now ready!");
    this.username = 'CristianFreitas';

  }

  // Function profile info
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + 
    this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }

}
