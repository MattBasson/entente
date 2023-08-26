// shell\src\app\model\microfrontend.model.ts
import { LoadRemoteModuleOptions, Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
    isActive: boolean;
    exposedModule: string;
    displayName?: string;
    routePath?: string;
    ngModuleName?: string;
    componentName?: string;
 };

export type CustomManifest = Manifest<CustomRemoteConfig>;

export type PluginOption = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
};
