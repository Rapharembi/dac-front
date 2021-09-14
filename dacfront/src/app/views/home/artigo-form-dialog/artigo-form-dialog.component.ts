import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtigoService } from 'src/app/shared/service/artigo.service';

@Component({
  selector: 'app-artigo-form-dialog',
  templateUrl: './artigo-form-dialog.component.html',
  styleUrls: ['./artigo-form-dialog.component.css']
})
export class ArtigoFormDialogComponent implements OnInit {
  public artigoForm: FormGroup;

 
  constructor(
    public dialogRef: MatDialogRef<ArtigoFormDialogComponent>,
    private fb: FormBuilder,
    private rest: ArtigoService,
  ) { }

  ngOnInit(): void {
    this.artigoForm = this.fb.group({
      idioma: ['',[Validators.required]],
      ordemVolume: ['',[Validators.required]],
      pchaveIng:	 ['',[Validators.required]],
      pchavePt: ['',[Validators.required]],
      quantidadePaginas: ['',[Validators.required]],
      tituloIng: ['',[Validators.required]],
      tituloOriginal: ['',[Validators.required]],
      resumoIng: ['',[Validators.required]],
      resumoPt: ['',[Validators.required]]
      });
  }
  createArtigo(){
    this.rest.postArtigos(this.artigoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.artigoForm.reset();
    window.location.reload();

  }

  cancel(): void {
    this.dialogRef.close();
    this.artigoForm.reset();
  }
}
