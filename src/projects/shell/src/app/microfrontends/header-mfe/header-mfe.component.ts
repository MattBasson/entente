import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MfeComponent } from '../mfe.component';

@Component({
  selector: 'app-header-mfe',
  template: `<ng-container #placeHolder></ng-container>`

})
export class HeaderMfeComponent extends MfeComponent implements OnInit {


  override  async  ngOnInit(): Promise<void> {
    this.remoteComponentName ="HeaderComponent"
    await super.ngOnInit();

    if(this.componentRef){
      //componentRef should be initialised and you can set props on your mfe here.
      // e.g.
      // this.componentRef.csi = '1234';
      // this.componentRef['csi'] = '1234';
      this.componentRef.content = 'Hello world from elephant club';

    }
    console.debug('Header changes',this.remoteComponentName);
  }

}
