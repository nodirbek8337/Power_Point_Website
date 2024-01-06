import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/model/video';
import { DatesService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  videoDates: Video[] = [];

  constructor(private videoDatesService: DatesService) {
    videoDatesService.getAll().subscribe((serverVideos) => {
      this.videoDates = serverVideos;
    });
  }

  ngOnInit(): void {}
}
