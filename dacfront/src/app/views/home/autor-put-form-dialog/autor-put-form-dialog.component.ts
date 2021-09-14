import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from 'src/app/shared/service/autor.service';

@Component({
  selector: 'app-autor-put-form-dialog',
  templateUrl: './autor-put-form-dialog.component.html',
  styleUrls: ['./autor-put-form-dialog.component.css']
})
export class AutorPutFormDialogComponent implements OnInit {
  public autorPutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: AutorService,
    public dialogRef: MatDialogRef<AutorPutFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.autorPutForm = this.fb.group({
      id: ['',[Validators.required]],
      afiliacaoIng: ['',[Validators.required]],
      afiliacaoPt: ['',[Validators.required]],
      email:	 ['',[Validators.required]],
      meioNome: ['',[Validators.required]],
      orcID: ['',[Validators.required]],
      ordemArtigo: ['',[Validators.required]],
      pais: ['',[Validators.required]],
      primNome: ['',[Validators.required]],
      ultiNome: ['',[Validators.required]]
      });
  }

  updateAutor(){
    this.rest.updateAutores((this.autorPutForm.value)).subscribe(result => {});
    this.dialogRef.close();
    this.autorPutForm.reset();
    window.location.reload();

  }

   cancel(): void {
    this.dialogRef.close();
    this.autorPutForm.reset();
  }

}