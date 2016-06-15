var HtmlWebpackplugin=require('html-webpack-plugin');
var webpack=require('webpack');

function htmlWebpackObjectGenerator(name){
  return {
    title:`${name} Page`,
    template:'template.html',
    filename:`${name}.html`,
    chunks:[name]
  }
}

module.exports={
  entry:{
    index: './index.js',
    demo1 : './demo1/index.js',
    demo2: './demo2/index.js',
    demo3: './demo3/index.js',
    demo4: './demo4/index.js',
    demo5: './demo5/index.js',
    demo6: './demo6/index.js',
    demo7: './demo7/index.js',
    demo8: './demo8/index.js',
    demo9: './demo9/index.js',
    demo10: './demo10/index.js',
    demo11: './demo11/index.js'
  },
  output:{
    path: __dirname+'/dist',
    filename: "bundle_[name].js"
  },
  module:{
    loaders:[
      {test: /\.jsx?$/, exclude:/node_modules/, loader:"babel"}
    ]
  },
  plugins:[
    // new HtmlWebpackplugin({title:'index Page', template:'template.html', filename:'index.html', chunks:['index']})
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('index')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo1')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo2')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo3')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo4')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo5')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo6')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo7')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo8')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo9')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo10')),
    new HtmlWebpackplugin(htmlWebpackObjectGenerator('demo11')),
    new webpack.ProvidePlugin({
      $:'jquery',
      jquery:"jquery"
    })
  ]
};
