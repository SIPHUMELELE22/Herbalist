import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline,bagHandleOutline,
  bagHandle,
  homeOutline,
  listOutline,
  calendarOutline,
  chevronBackOutline,
  settingsOutline,
  callOutline,
  mailOutline,
  cartOutline,
  receiptOutline,
  informationCircleOutline,
  menuOutline,
  logOutOutline,
  trashOutline,
  addOutline,
  removeOutline,
  locationOutline,
  cameraOutline,
  createOutline,
  eyeOutline,
  chatbubbleOutline,
  eyeOffOutline,
  albumsOutline, } from 'ionicons/icons';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    RouterModule,
    IonicModule, CommonModule
  ],
})
export class AppComponent {
  
  constructor() {
    addIcons({
      personOutline,
      lockClosedOutline,
      bagHandleOutline,
      bagHandle,
      calendarOutline,
      homeOutline,
      listOutline,
      settingsOutline,
      callOutline,
      mailOutline,
      chevronBackOutline,
      cartOutline,
      receiptOutline,
      informationCircleOutline,
      menuOutline,
      logOutOutline,
      trashOutline,
      addOutline,
      removeOutline,
      locationOutline,
      cameraOutline,
      createOutline,
      eyeOutline,
      chatbubbleOutline,
      albumsOutline,
      eyeOffOutline
    });
    
  }
}