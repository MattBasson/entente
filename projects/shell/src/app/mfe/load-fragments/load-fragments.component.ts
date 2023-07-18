import { loadRemoteModule } from '@angular-architects/module-federation';
import { compileClassMetadata } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginOptions } from 'src/app/model/mf.model';

@Component({
  selector: 'app-load-fragments',
  template: ` <ng-container #placeHolder></ng-container> `
})
export class LoadFragmentsComponent implements OnChanges {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input() options!: PluginOptions;

  async ngOnChanges(changes: SimpleChanges): Promise<void> {

    this.viewContainer.clear();

    console.debug('!!! Options !!!', this.options);
    //this.options.params = {}

    const component = await loadRemoteModule(this.options!).then(
      (module) => module[this.options?.componentName]
    );
    // const component = await loadRemoteModule({
    //   type:'module',
    //   remoteEntry: "http://localhost:4201/remoteEntry.js",
    //   exposedModule: "./MfeFragmentComponent",

    // }).then(
    //   //(module) => module['MfeFragmentComponent']
    //  m => m.MfeFragmentComponent
    // );

    // const component = await loadRemoteModule({

    //   type: 'manifest',
    //   remoteName: 'mfe1',
    //   exposedModule: './MfeFragmentComponent'


    // }).then(
    //   //(module) => module['MfeFragmentComponent']
    //  m => m.MfeFragmentComponent
    // );

    const ref = this.viewContainer?.createComponent(component).instance as any;

    ref.csi = 'Hi CSI';
    ref.lni = 'hi Lni';
    ref['csi'] += ' csi';
    ref['lni'] += ' lni';
  }

}
