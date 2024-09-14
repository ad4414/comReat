const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
 template: path.join(__dirname, "demo/index.html"),
 filename: "./index.html"
});
module.exports = {
 entry: path.join(__dirname, "demo/index.js"),
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
   use: "babel-loader",
   exclude: /node_modules/
 },{
   test: /\.less$/, /**如果不用 sass，则 .css$**/
   use: ["style-loader", "css-loader","less-loader"] /**sass-loader 根据前面可选**/
 }]
},
 plugins: [htmlWebpackPlugin],
 resolve: {
   extensions: [".js", ".jsx"]
 },
 devServer: {
   port: 8008
}};