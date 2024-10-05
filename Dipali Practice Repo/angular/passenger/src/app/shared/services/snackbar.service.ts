import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { verifyHostBindings } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private_snackbar :MatSnackBar
  ) { }
}
 function opensnackbar(msg: any, string: any) {
  throw new Error('Function not implemented.');
}
