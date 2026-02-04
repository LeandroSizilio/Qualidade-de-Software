import { Injectable } from '@angular/core';
import { DataProcessingUtils } from './data-processing-utils';

@Injectable({
  providedIn: 'root',
})
export class DuplicateTestService {
  // This is intentional duplicate code to demonstrate jscpd can catch failures
  calculateValue(x: number, y: number): number {
    return DataProcessingUtils.calculateValue(x, y);
  }

  processData(data: string): string {
    return DataProcessingUtils.processData(data);
  }
}
