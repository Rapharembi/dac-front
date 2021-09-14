import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtigoService } from 'src/app/shared/service/artigo.service';

@Component({
  selector: 'app-artigo-put-form-dialog',
  templateUrl: './artigo-put-form-dialog.component.html',
  styleUrls: ['./artigo-put-form-dialog.component.css']
})
export class ArtigoPutFormDialogComponent implements OnInit {
  public artigoPutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: ArtigoService,
    public dialogRef: MatDialogRef<ArtigoPutFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.artigoPutForm = this.fb.group({
      id: ['',[Validators.required]],
      idioma: ['',[Validators.required]],
      ordemVolume: ['',[Validators.required]],
      pchaveIng:	 ['',[Validators.required]],
      pchavePt: ['',[Validators.required]],
      quantidadePaginas: ['',[Validators.required]],
      tituloIng: ['',[Validators.required]],
      tituloOriginal: ['',[Validators.required]],
      resumoIng: ['',[Validators.required]],
      resumoPt: ['',[Validators.required]],
      autores: []
      });
  }

  updateArtigo(){
    this.artigoPutForm.patchValue({autores: []})
    this.rest.updateArtigos((this.artigoPutForm.value)).subscribe(result => {});
    this.dialogRef.close();
    this.artigoPutForm.reset();
    window.location.reload();

  }

   cancel(): void {
    this.dialogRef.close();
    this.artigoPutForm.reset();
  }

}