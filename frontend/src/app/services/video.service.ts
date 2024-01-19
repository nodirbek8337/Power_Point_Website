import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = 'http://localhost:5000/api/videos';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getVideoById(videoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${videoId}`);
  }

  addVideo(videoData: any): Observable<any> {
    return this.http.post(this.apiUrl, videoData);
  }

  deleteVideo(videoId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${videoId}`);
  }
}
