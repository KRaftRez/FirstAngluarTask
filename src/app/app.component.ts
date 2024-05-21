import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
  isDropDownOpened: boolean= false;
  isDropDownOpened1: boolean= false;
  isDropDownOpened2: boolean= false;
  isDropDownOpened3: boolean= false;
  isDropDownOpened4: boolean= false;

  toggleDropdown(): void{
    this.isDropDownOpened= !this.isDropDownOpened;
  }
  toggleDropdown1(): void{
    this.isDropDownOpened1= !this.isDropDownOpened1;
  }
  toggleDropdown2(): void{
    this.isDropDownOpened2= !this.isDropDownOpened2;
  }
  toggleDropdown3(): void{
    this.isDropDownOpened3= !this.isDropDownOpened3;
  }
  toggleDropdown4(): void{
    this.isDropDownOpened4= !this.isDropDownOpened4;
  }
}
