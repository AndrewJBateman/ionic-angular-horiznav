import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ScreensizeService {
	private isDesktop = new BehaviorSubject<boolean>(false);

	constructor() {}

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
