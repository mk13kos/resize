import { InjectionToken } from '@angular/core';

export interface VSConfigInterface {
  medium: number;
  large: number;
}

export const VIEWPORT_SIZE_CONFIG = new InjectionToken<VSConfigInterface>('VIEWPORT_SIZE_CONFIG');
