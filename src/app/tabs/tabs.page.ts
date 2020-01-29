import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isDesktop: boolean;

  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        // Reload as routing is wrong
        window.location.reload();
      }

      this.isDesktop = isDesktop;
    });
  }
}
