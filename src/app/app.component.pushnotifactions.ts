import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {
  PushNotificationsService
} from './push.notification.service';
@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notifications.html',
})
export class PushNotificationComponent implements OnInit {
  title: string = 'Browser Push Notifications!';
  constructor(private _notificationService: PushNotificationsService) {
    console.log('123');
    this._notificationService.requestPermission();
  }

  ngOnInit() {}

  sendNotify() {
    console.log('sendNotify');
    let data: Array < any >= [];
    data.push({
      'title': 'Your Bestegg Loan is Approved',
      'alertContent': 'Your Bestegg Loan is Approved'
    });
    // data.push({
    //   'title': 'Request',
    //   'alertContent': 'This is Second Alert -- By Debasis Saha'
    // });
    // data.push({
    //   'title': 'Leave Application',
    //   'alertContent': 'This is Third Alert -- By Debasis Saha'
    // });
    // data.push({
    //   'title': 'Approval',
    //   'alertContent': 'This is Fourth Alert -- By Debasis Saha'
    // });
    // data.push({
    //   'title': 'To Do Task',
    //   'alertContent': 'This is Fifth Alert -- By Debasis Saha'
    // });
    this._notificationService.generateNotification(data);
  }
}
