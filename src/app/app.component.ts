import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'i love nature',
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountain',
      content: 'i adore mountains',
    },
    {
      title: 'Hard biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker',
      content: 'i am hard biking',
    },
    {
      title: 'Hard biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker',
      content: 'i am hard biking',
    },
  ];
}
