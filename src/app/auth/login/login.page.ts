import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, IonImg, IonFab, IonFabButton, IonButton, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonButton, IonFabButton, IonIcon, IonImg, IonInput, IonItem, IonFab, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule,]
})
export class LoginPage implements OnInit {

  constructor() { 
     
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
