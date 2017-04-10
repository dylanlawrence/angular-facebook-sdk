import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FacebookService } from '../facebook.service';

@Component({
  selector: 'fb-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShareDialog implements OnInit {

  constructor(private fb:FacebookService) {
    console.log(fb);
   }

  ngOnInit() {
  
  }
}