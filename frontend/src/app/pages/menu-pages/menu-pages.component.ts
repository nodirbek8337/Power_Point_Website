import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/model/video';
import { DatesService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-menu-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.css'],
})
export class MenuPagesComponent implements OnInit {
  video!: Video;
  videoDates: Video[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private videoDatesService: DatesService
  ) {

    activateRoute.params.subscribe((params) =>{
      console.log(params);
      
    })

    videoDatesService.getAll().subscribe((serverVideos) => {
      this.videoDates = serverVideos;
    });

    activateRoute.params.subscribe((params) => {
      if (params['id']) {
        videoDatesService.getVideoById(params['id']).subscribe((serverVideo) => {
          this.video = serverVideo;
        });
      }
    });
  }
  ngOnInit(): void {}
}
