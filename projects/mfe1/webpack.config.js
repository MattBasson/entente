const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',
  exposes: {
    './RemoteMfeModule': './src/app/remote-mfe/remote-mfe.module.ts',
    './MfeFragmentComponent': './src/app/remote-mfe/mfe-fragment/mfe-fragment.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
