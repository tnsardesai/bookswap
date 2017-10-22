import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { DynamoDB, User } from '../../providers/providers';

@Component({
  selector: 'page-tasks-create',
  templateUrl: 'tasks-create.html'
})
export class TasksCreatePage {

  isReadyToSave: boolean;

  item: any;
  public attributes: any;
  public email: any;
  public username: any;
  
  isAndroid: boolean;


  constructor(public navCtrl: NavController,
              public user: User,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public platform: Platform) {
    this.isAndroid = platform.is('android');
    this.item = {
      'taskId': navParams.get('id')
    };
    this.isReadyToSave = true;

    user.getUser().getUserAttributes((err, data) => {
      this.attributes = data;
      this.email = this.attributes[2].getValue();
    });

    this.username = user.getUser().getUsername();

  }
  



  ionViewDidLoad() {

  }

  /*upload() {
    let loading = this.loadingCtrl.create({
      content: 'Uploading image...'
    });
    loading.present();

    if (this.selectedPhoto) {
      this.s3.upload({
        'Key': 'public/'+ this.item('taskId'),
        'Body': this.selectedPhoto,
        'ContentType': 'image/jpeg'
      }).promise().then((data) => {
        this.refreshAvatar();
        console.log('upload complete:', data);
        loading.dismiss();
      }, err => {
        console.log('upload failed....', err);
        loading.dismiss();
      });
    }
    loading.dismiss();

  }

*/

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() { 
    this.viewCtrl.dismiss(this.item);
  }
}
