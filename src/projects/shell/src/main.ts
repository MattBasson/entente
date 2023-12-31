import {  setManifest } from '@angular-architects/module-federation';
import { CustomManifest } from './app/microfrontends/model/microfrontend.model';
import { environment } from './environments/environment';

let manifestPath = '/assets/mf.manifest.json';

const mfManifestJson = fetch(manifestPath);
const parseConfig = async (mfManifest: Promise<Response>) => {
  const manifest: CustomManifest = await (await mfManifest).json();
  const filterManifest: CustomManifest = {};
  for (const key of Object.keys(manifest)) {
    const value = manifest[key];
    // check more details
    if (value.isActive === true) {
      filterManifest[key] = value;
    }
  }
  return filterManifest;
};
parseConfig(mfManifestJson)
  .then((data) => setManifest(data))
  .catch((err) => console.log(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.log(err));
