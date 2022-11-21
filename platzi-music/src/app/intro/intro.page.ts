import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOps ={
    initialSlide: 0,
    slidePreview: 1,
    centerdSlides: true,
    speed: 400
  };
  slides = [
    {
      imageSrc: "assets/icon/keynote.jpg",
      imageAlt: "Platzi music logo",
      title: "Listen yout music",
      subtitle: "ANYWHERE YOU WANT TO PLAY",
      description: 'Best songs, best artists, also you can mix the songs you like however you want.',
      icon: "play"
    },
    {
      imageSrc: "assets/icon/keynote.jpg",
      imageAlt: "Platzi music logo",
      title: "Watch your videos",
      subtitle: "CHOOSE YOUR VIDEOS TO WATCH",
      description: 'See any videos you want, best content creator and soon',
      icon: "videocam"
    },
    {
      imageSrc: "assets/icon/keynote.jpg",
      imageAlt: "Platzi music logo",
      title: "SOON",
      subtitle: "",
      description: "",
      icon: ""
    }
  ];
  constructor(private router: Router, private storage: Storage) { }
  finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
