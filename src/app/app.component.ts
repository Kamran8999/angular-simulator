import { Component } from '@angular/core';
import './training';
import {Color} from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  companyName: string = "РУМТИБЕТ";

  constructor() {
    this.saveLastVisit();
    this.countVisit();
  };

  isMainColor(color: Color): boolean {
    const colors = [Color.RED, Color.GREEN, Color.BLUE];
    return (colors.includes(color))
  };

  saveLastVisit(): void {
    const currentDate: Date = new Date();
    localStorage.setItem('lastVisit', currentDate.toString());
  };

  countVisit(): void {
    let pageViewCount: string | null = localStorage.getItem('visitCount') ?? "0";

    const newVisitCount: number = +pageViewCount + 1;

    localStorage.setItem('visitCount', newVisitCount.toString());
  };

};


