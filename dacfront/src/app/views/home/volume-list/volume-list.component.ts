import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Volume } from 'src/app/shared/model/volume.model';
import { VolumeService } from 'src/app/shared/service/volume.service';

@Component({
  selector: 'app-volume-list',
  templateUrl: './volume-list.component.html',
  styleUrls: ['./volume-list.component.css']
})
export class VolumeListComponent implements OnInit {
  volumes: Volume[];
  
  
  constructor(
    public volumeService: VolumeService
    
  ) { }
  
  ngOnInit(): void {
    this.getVolume();
    
  }
  
  getVolume(){
    this.volumeService.getVolumes().subscribe(data => {
      this.volumes = data;
      console.log(this.volumes);
    });
      
  }

}
