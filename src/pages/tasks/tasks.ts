import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { TasksCreatePage } from '../tasks-create/tasks-create';

import { DynamoDB, User } from '../../providers/providers';

declare var AWS: any;
declare const aws_user_files_s3_bucket;
declare const aws_user_files_s3_bucket_region;

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  public items: any;
  public refresher: any;
  private taskTable: string = 'ionic-mobile-hub-tasks';
  private s3: any;
  
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public user: User,
              public db: DynamoDB) {
    this.s3 = new AWS.S3({
      'params': {
        'Bucket': aws_user_files_s3_bucket
      },
      'region': aws_user_files_s3_bucket_region
    });
    this.refreshTasks();
  }


  refreshData(refresher) {
    this.refresher = refresher;
    this.refreshTasks()
  }

  refreshTasks() {
    this.db.getDocumentClient().scan({
      'TableName': this.taskTable,
    }).promise().then((data) => {
      this.items = data.Items;
      this.items.forEach(element => {
        this.s3.getSignedUrl('getObject', {'Key': String(element.photo)}, (err, url) => {
          element.photo = url;
        });
      });
      if (this.refresher) {
        this.refresher.complete();
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  generateId() {
    var len = 16;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charLength = chars.length;
    var result = "";
    let randoms = window.crypto.getRandomValues(new Uint32Array(len));
    for(var i = 0; i < len; i++) {
      result += chars[randoms[i] % charLength];
    }
    return result.toLowerCase();
  }

  addTask() {
    let id = this.generateId();
    let addModal = this.modalCtrl.create(TasksCreatePage, { 'id': id });
    addModal.onDidDismiss(item => {
      if (item) {
        item.userId = AWS.config.credentials.identityId;
        item.created = (new Date().getTime() / 1000);
        this.db.getDocumentClient().put({
          'TableName': this.taskTable,
          'Item': item,
          'ConditionExpression': 'attribute_not_exists(id)'
        }, (err, data) => {
          if (err) { console.log(err); }
          this.refreshTasks();
        });
      }
    })
    addModal.present();
  }

  deleteTask(task, index) {
    this.db.getDocumentClient().delete({
      'TableName': this.taskTable,
      'Key': {
        'userId': AWS.config.credentials.identityId,
        'taskId': task.taskId
      }
    }).promise().then((data) => {
      this.items.splice(index, 1);
    }).catch((err) => {
      console.log('there was an error', err);
    });
  }

}
