import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Video } from 'src/app/model/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  videos: Video[] = [];
  newVideo: any = {
    videoNum: 0, // Boshlang'ich qiymati misol uchun 0 bo'lishi mumkin
    imgUrl: '',
    videoUrl: '',
    name: '',
    description: '',
  };

  user: any;

  constructor(private videoService: VideoService) {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }

    setInterval(() => {
      videoService.getVideos().subscribe(
        (data: any[]) => {
          this.videos = data.sort((a, b) => a.videoNum - b.videoNum);
        },
        (error) => {
          console.error("Ma'lumotlar so'rovida xatolik!!! : ", error);
        }
      );
    }, 1000);
  }

  ngOnInit(): void {}

  addVideo(form: NgForm): void {
    this.newVideo.imgUrl = form.value['imgUrl'];
    this.newVideo.name = form.value['name'];
    this.newVideo.videoUrl = form.value['videoUrl'];
    this.newVideo.videoNum = form.value['videoNum'];
    this.newVideo.description = form.value['description'];

    this.videoService.addVideo(this.newVideo).subscribe(
      (response) => {
        alert(`Yangi video ma'lumotlar bazasiga saqlandi😊`);
        form.reset();
        this.newVideo = {
          videoNum: 0,
          imgUrl: '',
          videoUrl: '',
          name: '',
          description: '',
        };
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteVideo(videoId: string): void {
    alert("Bu video o'chirib tashlanadi😁");
    this.videoService.deleteVideo(videoId).subscribe(
      () => {},
      (error) => {
        console.error('Xatolik:', error);
      }
    );
  }
}
