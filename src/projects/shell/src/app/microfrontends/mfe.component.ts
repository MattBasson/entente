import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomManifest, PluginOption } from './model/microfrontend.model';
import { getManifest, loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-base-mfe',
  template: `<ng-container #placeHolder></ng-container>`
})
export class MfeComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input() remoteComponentName!: string;

  protected component : any;

  protected componentRef : any;

  async ngOnInit(): Promise<void> {

    this.viewContainer.clear();

    const mfeEntry = this.getComponenentManifestEntry();

    if(mfeEntry){
      this.component = await loadRemoteModule(mfeEntry).then(
        (m) => m[this.remoteComponentName]
      );

      this.componentRef = this.viewContainer?.createComponent(this.component).instance as any;
    }
    else{
      console.error('No Mfe Manifest entry found',this.remoteComponentName);
    }

  }

  protected getComponenentManifestEntry() : PluginOption | undefined {

    const manifest = getManifest<CustomManifest>();

    const options = Object.values(manifest).filter(
      (v) => v.componentName === this.remoteComponentName
    ) as PluginOption[];

    if(options[0])
    {
      return options[0];
    }
    return undefined;
  }

}
