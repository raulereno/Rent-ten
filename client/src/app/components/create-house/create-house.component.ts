import { DataServiceService } from 'src/app/services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { AuthService } from '@auth0/auth0-angular';

interface NewHouse{
  city:string;
  country:string;
  rooms:number;
  bathrooms:number;
  maxpeople:number;
  allowpets:boolean;
  wifi:boolean;
  type:string;
  picture?:string[];
}
let notNum=(string:string)=>{


}
//TODO: Raul
@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css'],
  providers:[UploadImgService]
})


export class CreateHouseComponent implements OnInit {

  newHouse:NewHouse={
    city:"",
    country:"",
    rooms:0,
    bathrooms:0,
    maxpeople:0,
    allowpets:false,
    wifi:false,
    type:"",
    picture:[]
  }

  files: File[] = [];

  profileJson: any;
  dbProfile: any = {}

  constructor(private _uploadImg:UploadImgService ,private _http:DataServiceService,private _auth:AuthService ) { }


  ngOnInit(): void {
    this._auth.user$.subscribe(profile=>{
      this.profileJson = profile;
      this._http.getUser(this.profileJson.email).subscribe(data => this.dbProfile = data);
    })
    console.log(this.dbProfile);
  }


  onSelect(event:any) {
    // console.log(event.addedFiles[0].name);
    if(this.files.some(e=>e.name === event.addedFiles[0].name)){
      return
    }
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event:any) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit(event:any){
    event.preventDefault();
    // console.log(event);
    this.onUpload();
  }

  onUpload (){
    if(!this.files[0]){
      alert("Ingresa al menos una foto de portada")
      return
    }

    this.files.forEach((image)=>{
      const data = new FormData();
      data.set('file', image);
      data.set('upload_preset','h4e9cy2g' );
      data.set('cloud_name', 'dbgpp8nla');

     this._uploadImg.uploadImage(data).subscribe(response=>{
      if(response){
        this.newHouse.picture?.push(response.secure_url)
        console.log(this.newHouse);
      }
      })
    })

  }

  get currentHouse(){
    return JSON.stringify(this.newHouse)
  }






}