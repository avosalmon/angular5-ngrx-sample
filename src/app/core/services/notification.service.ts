import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {
  /**
   * Default duration to show success snackbar is 10 secounds.
   */
  private successDuration = 10000;

  /**
   * Default duration to show success snackbar is 60 seconds.
   */
  private errorDuration = 60000;

  constructor(private snackBar: MatSnackBar) {}

  success(message: string, duration?: number): void {
    duration = duration || this.successDuration;

    this.snackBar.open(message, null, {
      duration: duration,
      extraClasses: ['success-snackbar']
    });
  }

  error(message: string, duration?: number): void {
    duration = duration || this.errorDuration;

    const snackBarRef = this.snackBar.open(message, 'x', {
      duration: duration,
      extraClasses: ['error-snackbar']
    });

    snackBarRef.onAction().subscribe(() => {
      snackBarRef.dismiss();
    });
  }
}
