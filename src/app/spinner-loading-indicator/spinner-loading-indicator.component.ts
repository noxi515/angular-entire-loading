import { ChangeDetectionStrategy, Component, InjectionToken, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

/**
 * Indicatorを表示するときのオプション
 */
export interface SpinnerLoadingIndicatorOptions {
  color?: ThemePalette;
  diameter?: number;
  strokeWidth?: number;
}

/**
 * オプションを受け取るためのトークン
 */
export const SPINNER_LOADING_INDICATOR_OPTIONS = new InjectionToken<SpinnerLoadingIndicatorOptions>('SPINNER_LOADING_INDICATOR_OPTIONS');

@Component({
  selector: 'app-spinner-loading-indicator',
  templateUrl: './spinner-loading-indicator.component.html',
  styleUrls: [ './spinner-loading-indicator.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerLoadingIndicatorComponent implements OnInit {

  /**
   * Indicatorの色
   */
  color: ThemePalette = 'primary';

  /**
   * Indicatorの直径
   */
  diameter: number = 40;

  /**
   * Indicatorの線の太さ
   */
  strokeWidth: number = 2;

  constructor() {
  }

  ngOnInit() {
  }

}
