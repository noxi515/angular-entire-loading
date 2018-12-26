import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerLoadingIndicatorComponent } from './spinner-loading-indicator/spinner-loading-indicator.component';

export interface LoadingIndicatorRef {
  close(): void;
}

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {

  constructor(private readonly _overlay: Overlay) {
  }

  show(): LoadingIndicatorRef {
    const overlayRef = this._createOverlay();
    const portal = new ComponentPortal(SpinnerLoadingIndicatorComponent,);
    overlayRef.attach(portal);

    return {
      close() {
        overlayRef.detach();
        overlayRef.dispose();
      }
    };
  }

  private _createOverlay(): OverlayRef {
    return this._overlay.create({
      width: '100%',
      height: '100%',
      hasBackdrop: true,
      panelClass: 'app-loading-indicator',
      backdropClass: 'app-loading-indicator-backdrop',
    });
  }
}
