import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from 'src/app/shared/service/autor.service';


@Component({
  selector: 'app-autor-form-dialog',
  templateUrl: './autor-form-dialog.component.html',
  styleUrls: ['./autor-form-dialog.component.css']
})
export class AutorFormDialogComponent implements OnInit {
  public autorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AutorFormDialogComponent>,
    private fb: FormBuilder,
    private rest: AutorService,
  ) { }

  ngOnInit(): void {
    this.autorForm = this.fb.group({
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
  createAutor(){
    this.rest.postAutores(this.autorForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.autorForm.reset();
    window.location.reload();

  }

  cancel(): void {
    this.dialogRef.close();
    this.autorForm.reset();
  }

}
