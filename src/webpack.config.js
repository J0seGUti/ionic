const path = require('path');

module.exports = {
  // Otras opciones de configuración de Webpack...

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Otras opciones de configuración de Webpack...

  // Opcional: si deseas personalizar la forma en que se resuelven los módulos CSS
  resolve: {
    extensions: ['.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      // Agrega aquí más directorios si es necesario
    ],
  },
};
