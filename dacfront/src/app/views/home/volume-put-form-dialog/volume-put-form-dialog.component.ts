import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolumeService } from 'src/app/shared/service/volume.service';

@Component({
  selector: 'app-volume-put-form-dialog',
  templateUrl: './volume-put-form-dialog.component.html',
  styleUrls: ['./volume-put-form-dialog.component.css']
})
export class VolumePutFormDialogComponent implements OnInit {

  public volumePutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: VolumeService,
    public dialogRef: MatDialogRef<VolumePutFormDialogComponent>
  ) { }

  ngOnInit(): void {
  this.volumePutForm = this.fb.group({
    id: ['',[Validators.required]], 
    cidade: ['',[Validators.required]],
    data:	 ['',[Validators.required]],
    descIng: ['',[Validators.required]],
    descPt: ['',[Validators.required]],
    edicao: ['',[Validators.required]],
    sigla: ['',[Validators.required]],
    artigos: [[]]
    });
  }

  updateVolume(){
    this.volumePutForm.patchValue({artigos: []})
    this.rest.updateVolumes((this.volumePutForm.value)).subscribe(result => {});
    this.dialogRef.close();
    this.volumePutForm.reset();
    window.location.reload();

  }

   cancel(): void {
    this.dialogRef.close();
    this.volumePutForm.reset();
  }

}
