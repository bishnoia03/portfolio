import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule
        } from '@angular/material';



@NgModule({
    imports: [
       MatButtonModule,
       MatInputModule,
       MatIconModule,
       MatSnackBarModule
    ],
    exports: [
       MatButtonModule,
       MatInputModule,
       MatIconModule,
       MatSnackBarModule
       ]
})
export class MaterialModule { }