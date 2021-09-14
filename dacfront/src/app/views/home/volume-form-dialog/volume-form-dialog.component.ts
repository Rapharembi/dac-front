import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VolumeService } from 'src/app/shared/service/volume.service';

@Component({
  selector: 'app-volume-form-dialog',
  templateUrl: './volume-form-dialog.component.html',
  styleUrls: ['./volume-form-dialog.component.css']
})
export class VolumeFormDialogComponent implements OnInit {
  public volumeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: VolumeService,
    public dialogRef: MatDialogRef<VolumeFormDialogComponent>
  ) { }

  ngOnInit(): void {
  this.volumeForm = this.fb.group({
    cidade: ['',[Validators.required]],
    data:	 ['',[Validators.required]],
    descIng: ['',[Validators.required]],
    descPt: ['',[Validators.required]],
    edicao: ['',[Validators.required]],
    sigla: ['',[Validators.required]]
    });
  }

  createVolume(){
    this.rest.postVolumes(this.volumeForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.volumeForm.reset();
    window.location.reload();

  }

   cancel(): void {
    this.dialogRef.close();
    this.volumeForm.reset();
  }

}
