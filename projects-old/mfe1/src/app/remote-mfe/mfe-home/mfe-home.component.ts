import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfe-home',
  templateUrl: './mfe-home.component.html',
  styleUrls: ['./mfe-home.component.scss']
})
export class MfeHomeComponent implements OnInit{
  ngOnInit(): void {
    this.csi = 'hello';
  }
  @Input() csi! : string;


}
