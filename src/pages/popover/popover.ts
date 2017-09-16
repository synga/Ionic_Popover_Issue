import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {
  }

  // PUSH PAGE VIA POPOVER AFTER DISMISSING POPOVER
  public pushPageInPopover = () => {
    this.viewCtrl.dismiss().then(() => { this.navCtrl.push('PushedPage') })
  }

  // PUSH PAGE VIA POPOVER WITHOUT DISMISSING
  public pushPageWithout = () => {
    this.navCtrl.push('PushedPage');
  }

}
