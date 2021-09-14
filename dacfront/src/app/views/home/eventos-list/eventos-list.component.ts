import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Volume } from 'src/app/shared/model/volume.model';
import { VolumeService } from 'src/app/shared/service/volume.service';
import {ArtigoService} from 'src/app/shared/service/artigo.service';
import { Artigo } from 'src/app/shared/model/artigo.model';
import { Autor } from 'src/app/shared/model/autor.model';
import { AutorService } from 'src/app/shared/service/autor.service';
import { MatDialog } from '@angular/material/dialog';
import { VolumePutFormDialogComponent } from '../volume-put-form-dialog/volume-put-form-dialog.component';
import { ArtigoPutFormDialogComponent } from '../artigo-put-form-dialog/artigo-put-form-dialog.component';
import { AutorPutFormDialogComponent } from '../autor-put-form-dialog/autor-put-form-dialog.component';
@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {
  volumes: Volume[];
  artigos: Artigo[];
  autores: Autor[];
  
  
  constructor(
    public volumeService: VolumeService,
    public artigoService: ArtigoService,
    public autorService: AutorService,
    public dialog: MatDialog
    
  ) { }
  
  ngOnInit(): void {
    this.getVolume();
    this.getArtigo();
    this.getAutor();
    
  }
  
  getVolume(){
    this.volumeService.getVolumes().subscribe(data => {
      this.volumes = data;
      console.log(this.volumes);
    });
      
  }

  getArtigo(){
    this.artigoService.getArtigos().subscribe(data => {
      this.artigos = data;
      console.log(this.artigos);
    });
      
  }

  getAutor(){
    this.autorService.getAutores().subscribe(data => {
      this.autores = data;
      console.log(this.autores);
    });
      
  }

  deleteVolume(id: number): void{
    this.volumeService.deleteVolumes(id);
    window.location.reload();
  }

  deleteAutor(id: number): void{
    this.autorService.deleteAutores(id);
    window.location.reload();
  }

  deleteArtigo(id: number): void{
    this.artigoService.deleteArtigos(id);
    window.location.reload();
  }

  updateVolume(volId: number): void {
    const dialogRef = this.dialog.open(VolumePutFormDialogComponent, {
      minWidth: '400px',
      data:   {
        id: volId
      }   
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  updateArtigo(artigoId: number): void {
    const dialogRef = this.dialog.open(ArtigoPutFormDialogComponent, {
      minWidth: '400px',
      data:   {
        id: artigoId
      }   
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  updateAutor(autorId: number): void {
    const dialogRef = this.dialog.open(AutorPutFormDialogComponent, {
      minWidth: '400px',
      data:   {
        id: autorId
      }   
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
