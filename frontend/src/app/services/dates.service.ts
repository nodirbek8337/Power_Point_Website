import { Injectable } from '@angular/core';
import { Video } from '../model/video';
import { sample_videos } from 'src/data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VIDEOS_URL, VIDEO_BY_ID_URL } from '../constants/url';

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(VIDEOS_URL);
  }

  getVideoById(videoId: string): Observable<Video> {
    return this.http.get<Video>(VIDEO_BY_ID_URL + videoId);
  }
}
