import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastController } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlertModule {

  constructor( public toastController: ToastController,){}

  async toast( message , time , color){
    const toast = await this.toastController.create({
      message: message,
      duration: time,
      color: color
    });
    toast.present();
  }

 }
