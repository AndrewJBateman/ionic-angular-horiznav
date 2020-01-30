# Ionic Horizontal Navigation

Ionic-Angular tutorial app to switch from tabs to top nav bar as screen size increases.

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses a simple screensize service with a BehaviourSubject that is used in app.component and subscribed to in the tabs page. So when the screen size exceeds 568px then a boolean 'isDesktop' observable changes state. This is used in the tabs page to change the bottom tabs toolbar to a top nav bar using the Angular *ngIf="isDesktop'.

Note: screen reloads when going from PC to phone size - due to an issue with the tabs routing.

## Screenshots

![Ionic page](./img/pc.png)
![Ionic page](./img/phone.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)
* [Angular v8.1.2](https://angular.io/)
* [Ionic/angular v4.7.1](https://www.npmjs.com/package/@ionic/angular) including [ion-nav-link](https://ionicframework.com/docs/api/nav-link)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* servicet to change state of an observable when screen size hits a breakpoint of 568px.

```typescript
export class ScreensizeService {

  private isDesktop = new BehaviorSubject<boolean>(false);

  constructor() { }

  onResize(size: number) {
    if (size < 568) {
      this.isDesktop.next(false);
    } else {
      this.isDesktop.next(true);
    }
  }

  isDesktopView(): Observable<boolean> {
    console.log('state of isDesktop boolean is:', this.isDesktop.value);
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
```

## Features

* Uses the RxJS [distinctUntilChanged](https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged) to only emit an observable change of state when it is actually different.

## Status & To-do list

* Status: Working

* To-do: nothing. Could use this in other Ionic apps.

## Inspiration

* [Simon Grimm, Ionic Academy Tutorial: How to Create a Horizontal Navigation for Ionic Desktop Views](https://devdactic.com/horizontal-navigation-ionic-desktop/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!