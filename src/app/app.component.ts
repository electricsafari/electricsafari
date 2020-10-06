import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elsaf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('What are you looking for? We\'ve only got a single <h1> on the screen!');
  }
}
