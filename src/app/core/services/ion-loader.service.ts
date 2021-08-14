import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class IonLoaderService {

    public loading:any;

    constructor(
        public loadingController: LoadingController
    ) { }

    async loader( message ) {
        this.loading = await this.loadingController.create({
          message: message
        });
        return this.loading.present();
    }

}