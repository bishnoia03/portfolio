import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatInputModule,
        MatIconModule
        } from '@angular/material';



@NgModule({
    imports: [
       MatButtonModule,
       MatInputModule,
       MatIconModule
    ],
    exports: [
       MatButtonModule,
       MatInputModule,
       MatIconModule
       ]
})
export class MaterialModule { }