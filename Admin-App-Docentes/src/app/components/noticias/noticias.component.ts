import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/model/noticia';



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticia:Noticia = new Noticia();

  constructor(private servicioNoticias:NoticiasService) { }

  ngOnInit() {
  }

  agregarNoticia(){
    this.noticia.activa = true;
    this.noticia.fecha = (new Date()).toDateString()
    this.servicioNoticias.agregarNoticia(this.noticia)
      .subscribe(response =>{
         console.log(response)
      })
  }

}
