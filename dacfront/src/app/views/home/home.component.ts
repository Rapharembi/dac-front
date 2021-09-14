import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtigoFormDialogComponent } from './artigo-form-dialog/artigo-form-dialog.component';
import { AutorFormDialogComponent } from './autor-form-dialog/autor-form-dialog.component';
import { VolumeFormDialogComponent } from './volume-form-dialog/volume-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
    
  ) { }

  ngOnInit(): void {
  }

  addVolume(): void {
    const dialogRef = this.dialog.open(VolumeFormDialogComponent, {
      minWidth: '400px',
      
    });

   

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  addArtigo(): void {
    const dialogRef = this.dialog.open(ArtigoFormDialogComponent, {
      minWidth: '400px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addAutor(): void {
    const dialogRef = this.dialog.open(AutorFormDialogComponent, {
      minWidth: '400px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
