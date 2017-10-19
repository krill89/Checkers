//Konfiguracja Webpack
const	path	=	require("path");
module.exports	=	{
		entry:	"./src/js/app.js",
		output:	{	path:	path.resolve("src"),		filename:	"out.js"	},
devServer: { inline: true,
contentBase: './',
port: 3030
},
		watch:	true,
		module:	{
				loaders:	[	{
								test:	/\.js$/,		exclude:	/node_modules/,
								loader:	'babel-loader',
								query:	{	presets:	['es2015', "stage-2"]	}
						}
				]
		}
}
