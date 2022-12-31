import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';
  resources = [
    {color: 'red' , audio: '../assets/Audios/note1.wav'},
    {color: 'orange' , audio: '../assets/Audios/note2.wav'},
    {color: 'yellow' , audio: '../assets/Audios/note3.wav'},
    {color: 'green' , audio: '../assets/Audios/note4.wav'},
    {color: 'teal' , audio: '../assets/Audios/note5.wav'},
    {color: 'blue' , audio: '../assets/Audios/note6.wav'},
    {color: 'purple' , audio: '../assets/Audios/note7.wav'},
  ];
  playAudio(audioResource: string): void {
    const audio = new Audio();
    audio.src = audioResource;
    audio.load();
    audio.play();
  }
}
