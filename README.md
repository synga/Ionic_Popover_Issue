## About this project

It consist in 3 pages: HomePage, Popover (for the component) and PushedPage.

## The problem

When pushing a page in the Popover .ts file after using `viewCtrl.dismiss()` it simply pushs the page off the navigation stack and off the `<ng-component>`. Also the statusbar goes over the header, like it was a component of the page with position: absolute and top: 0.
Using it without the `viewCtrl.dismiss()` is fine.

The problem doesn't occurs only in the first page, every page pushed after it will have the same behaviour.

## How to reproduce the problem

In home there'll be a button in the page and a menu button in the header, whose opens the popover.

Open any browser dev tools, inspect the elements and open the `<ion-app>` tag.

Try pushing a page from the popover clicking in `Push with Dismiss`. PushedPage is pushed after ng-component, not inside of it and the problem is shown.

Clicking in `Push without Dismiss` or `Push page` button everything is fine.

Build for iOS to see the navbar issue, since it only occurs in iOS.
