import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const URL_API = environment.URL_API;
const NOTICIAS = environment.NOTICIAS;
const VER_NOTICIAS = environment.VER_NOTICIAS;
const AGREGAR_NOTICIA = environment.AGREGAR_NOTICIA;


@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  private noticias: any[] = []; 


  constructor(private http:HttpClient) { }

  verNoticias():Observable<Noticia[]>{
    return  this.http.get(URL_API+NOTICIAS+VER_NOTICIAS) as Observable<Noticia[]>

  }

  agregarNoticia(noticia:Noticia){
    return this.http.post(URL_API+NOTICIAS+AGREGAR_NOTICIA,noticia)
  }
}
