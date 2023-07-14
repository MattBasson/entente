import { loadRemoteModule } from '@angular-architects/module-federation';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginOptions } from 'src/app/model/mf.model';

@Component({
  selector: 'app-load-fragments',
  template: ` <ng-container #placeHolder></ng-container> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadFragmentsComponent implements OnChanges {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input() options!: PluginOptions;

  async ngOnChanges(changes: SimpleChanges): Promise<void> {

    this.viewContainer.clear();

    console.debug('!!! Options !!!', this.options);

    const component = await loadRemoteModule(this.options!).then(
      (module) => module[this.options?.componentName]
    );



    this.viewContainer?.createComponent(component);

  }

}
