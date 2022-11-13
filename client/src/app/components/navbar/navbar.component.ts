import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorListProfile } from 'src/app/redux/selectors/selectors';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { DataServiceService } from '../../services/data-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DataServiceService]
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public http: DataServiceService,
    private _store:Store<any>,
    @Inject(DOCUMENT) private doc: Document) { }

  profileJson: any;
  dbProfile: any = {}
  isLogged: boolean;
  profileImg: string;

  userProfile$: Observable<any> = new Observable()

  darkmode:boolean=false;


  ngOnInit(): void {
    this.auth.user$.subscribe(res=>{
      const mail = res?.email
      if(mail !== undefined){
        this.http.getUser(mail).subscribe(res=>{
          this.profileImg=res.picture
        })
      }
    });
    //TODO: RAUL -DANGER aca se produce un bucle de llamadas- arreglando
    // this.userProfile$ = this._store.select(selectorListProfile)
    // // this.userProfile$.subscribe(res=>{
    // //   this.profileImg=res.picture
    // // })

  }

  darkMode() : void{
    this.darkmode = !this.darkmode
    console.log(this.darkmode);
  }


  loginWithRedirect = async ():Promise<void> => {
    this.auth.loginWithRedirect({authorizationParams: {redirect_uri: window.location.origin}})
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin })
  }

  showInfo(): void {
  }

}
