import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-menu-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.css'],
})
export class MenuPagesComponent implements OnInit {
  video: any = [];
  videos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {
    route.params.subscribe((params) => {
      if (params['id']) {
        videoService.getVideoById(params['id']).subscribe((date) => {
          this.video = date;
        });
      }
    });

    videoService.getVideos().subscribe(
      (data: any[]) => {
        this.videos = data.sort((a, b) => a.videoNum - b.videoNum);
      },
      (error) => {
        console.error("Ma'lumotlar so'rovida xatolik!!! : ", error);
      }
    );
  }

  ngOnInit(): void {}
}
