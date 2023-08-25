import { Component, OnInit } from '@angular/core';
import { CustomManifest, PluginOptions } from '../model/mf.model';
import { getManifest } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: PluginOptions[] = [];

  ngOnInit(): void {
    const manifest = getManifest<CustomManifest>();

    console.debug('!MANIFEST!:', manifest);
     // filter remote mfe's which needs to loaded inside page (not via route)
     this.options = Object.values(manifest).filter(
      (v) => v.withInPage === true
    ) as PluginOptions[];

  }

}
