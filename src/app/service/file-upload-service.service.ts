import { Injectable } from '@angular/core';
import {Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: Storage) { }
  url: string = "";
  urlpro: string = "";
  public uploadImg($event:any, name:string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRef, file)
    .then(response =>{
      this.getImges()
    })
    .catch(error=>{
      console.log(error);
    })
  }
  getImges(){
    const  imagesRef= ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  
  public uploadImgPro($event:any, name:string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `proyecto/` + name)
    uploadBytes(imgRef, file)
    .then(response =>{
      this.getImgesPro()
    })
    .catch(error=>{
      console.log(error);
    })
  }
  getImgesPro(){
    const  imagesRef= ref(this.storage, 'proyecto')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.urlpro = await getDownloadURL(item);
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }
}


