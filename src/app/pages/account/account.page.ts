import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonMenu, IonFab, IonApp, IonButtons, IonItem, IonFabButton, IonBackButton, IonIcon, IonList, IonButton,IonMenuButton, IonMenuToggle, IonLabel, IonRouterOutlet, IonText, IonNav } from '@ionic/angular/standalone';
import { OrdersPage } from '../orders/orders.page';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  template: `
      <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Account</ion-title>
        <ion-buttons slot="start" mode="md">
        <ion-button [routerLink]="['/home']">
          <ion-icon color="dark" name="menu-outline" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-nav-link router-direction="forward" [component]="component">
        <ion-list>
            <ion-item lines="none" [routerLink]="['/profile']">
            <ion-icon color="dark" name="person-outline" slot="start"></ion-icon>
            <ion-label>Profile</ion-label>
            </ion-item>
            <ion-item lines="none" [routerLink]="['/orders']">
              <ion-icon color="dark" name="cart-outline" slot="start"></ion-icon>
              <ion-label>Orders</ion-label>
            </ion-item>
            <ion-item lines="none" [routerLink]="['/subscription']">
            <ion-icon color="dark" name="receipt-outline" slot="start"></ion-icon>
              <ion-label>Billing & Subscription</ion-label>
            </ion-item>
            <ion-item lines="none" [routerLink]="['/contact-us']">
              <ion-icon color="dark" name="mail-outline" slot="start"></ion-icon>
              <ion-label>Contact Us</ion-label>
            </ion-item>
            <ion-item lines="none" [routerLink]="['/about']">
            <ion-icon color="dark" name="information-circle-outline" slot="start"></ion-icon>
              <ion-label>About</ion-label>
            </ion-item>
            <ion-item lines="none" [routerLink]="['/login']">
            <ion-icon color="dark" name="log-out-outline" slot="start"></ion-icon>
              <ion-label (click)="signOut()" >Sign Out</ion-label>
            </ion-item>
        </ion-list>
      </ion-nav-link>
    </ion-content>
  ` ,
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonNav, IonText, IonButton, IonList, IonIcon, IonItem, IonApp, IonMenuToggle, IonFab, IonFabButton,
    IonBackButton, IonLabel, IonRouterOutlet, IonMenu, IonMenuButton, IonButtons,
    IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, CommonModule, FormsModule, RouterModule]
})
export class AccountPage implements OnInit {

  component = OrdersPage;
  private router = inject(Router);

  constructor() { }

  signOut() {
    this.router.navigate(['/login']);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
