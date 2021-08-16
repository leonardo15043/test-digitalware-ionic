import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { AlertModule } from 'src/app/core/modules/toast/alert.module';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dbObject: SQLiteObject;

  constructor(
    private sQLite:SQLite,
    public alertModule:AlertModule,
    private platform: Platform, 
  ) { }


  newDatabase(){
    return this.platform.ready().then(async() => {
      await this.sQLite.create({
        name: 'js_db',
        location: 'default',
      }).then((db:SQLiteObject)=>{
        this.dbObject = db;
      }).catch((err)=>{
        return this.alertModule.toast("Ocurrio un error al crear la base de datos: ",7000,"danger");
      });

      await this.createTables();
  
    });
  }

  async createTables(){
    return await this.dbObject.executeSql(`CREATE TABLE IF NOT EXISTS posts ( id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, title VARCHAR(255), body VARCHAR(600), favorite BOOLEAN, view BOOLEAN )`,[]);
  }
  

}
