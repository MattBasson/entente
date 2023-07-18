import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfe-fragment',
  templateUrl: './mfe-fragment.component.html',
  styleUrls: ['./mfe-fragment.component.scss']
})
export class MfeFragmentComponent implements OnInit {
  @Input() csi!: string ;
  @Input() lni!: string;

  ngOnInit(): void {
    this.csi += ' 12';
    this.lni += ' 13';
    console.debug('csi',this.csi);
    console.debug('lni',this.lni);
  }

}
