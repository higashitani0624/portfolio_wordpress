//path モジュールの読み込み
const path = require('path');
//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//browerSyncPlugin の読み込み
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
module.exports = {
 
  //エントリポイント（デフォルトと同じなので省略可）
  entry: './wp-content/themes/portfolio/src/js/index.js',  
  //出力先（デフォルトと同じなので省略可）
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'wp-content/themes/portfolio/dist/'),
    //ファイルを出力する前にディレクトリをクリーンアップ
    clean: true, 
    //Asset Modules の出力先の指定
    assetModuleFilename: './wp-content/themes/portfolio/dist/images/[name][ext][query]'
  },
  module: {
    rules: [
      //SASS 及び CSS 用のローダー
      {
        //拡張子 .scss、.sass、css を対象
        test: /\.(scss|sass|css)$/i, 
        // 使用するローダーの指定（後ろから順番に適用される）
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
      },
      //Asset Modules の設定
      {
        //対象とするアセットファイルの拡張子を正規表現で指定
        test: /\.(png|svg|jpe?g|gif)$/i,
        //画像をコピーして出力
        type: 'asset/resource'  
      },
    ],
  },
  //wordpressじゃなければこっちのサーバーを使う
  /*devServer: {  
    //表示する静的ファイルのディレクトリを指定
    static: path.join(__dirname,'./wp-content/themes/portfolio/'),  //または static: path.join(__dirname, ''),
    //サーバー起動時にブラウザを自動的に起動
    open: true,
    //webpack-dev-middleware 関連の設定
    devMiddleware: {
        writeToDisk: true, //バンドルされたファイルを出力する（実際に書き出す）
    },
  },*/
  //プラグインの設定
  plugins: [
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: 'style.css',
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 8003,
      proxy: "http://localhost:8002"
      //LocalのDATABASEタブで確認して合わせる
    }),
  ],
  //source-map タイプのソースマップを出力
  devtool: 'source-map',
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
};