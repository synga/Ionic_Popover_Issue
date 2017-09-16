import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) {
  }

  // METHOD TO OPEN THE POPOVER
  public openPopover = (ev: any) => {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: ev
    });
  }

  // WILL PUSH PAGE NORMALLY.
  public pushPage = () => {
    this.navCtrl.push('PushedPage');
  }

}
