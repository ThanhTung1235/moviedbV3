import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menu() {
    const toggle_Menu = document.getElementById('toggle_Menu');
    const nav_mobile = document.getElementById('nav_mobile');
    if (toggle_Menu.classList.contains('menu-active') === false) {
      toggle_Menu.classList.add('menu-active');
      nav_mobile.classList.remove('d-none');
    } else {
      toggle_Menu.classList.remove('menu-active');
      nav_mobile.classList.add('d-none');
    }
  }

  movie() {
    const movie = document.getElementsByClassName('movie')[0];
    if (movie.classList.contains('d-none')) {
      movie.classList.remove('d-none');
    } else {
      movie.classList.add('d-none');
    }
  }

  tv() {
    const tv = document.getElementsByClassName('tv')[0];
    if (tv.classList.contains('d-none')) {
      tv.classList.remove('d-none');
    } else {
      tv.classList.add('d-none');
    }
  }

  people() {
    const people = document.getElementsByClassName('people')[0];
    if (people.classList.contains('d-none')) {
      people.classList.remove('d-none');
    } else {
      people.classList.add('d-none');
    }
  }
}
