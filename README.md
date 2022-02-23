# Yuma.H PORTFOLIO (Wordpress)
=================================================================================================
wordpressのローカル開発環境を作るためのリポジトリです。

##　環境(構成要素)
- wp-env
- PHP : 7.3~
- Wordpress : 5.3.0~
- Database
    - MySQL 5.7~
- HTTP and reverse proxy serve
    - nginx 1.16.1~ 

## 開発環境の作り方
ソースをリポジトリからcloneします。

./wp-content/themes　のディレクトリまで移動します。

https://github.com/higashitani0624/wp-yuma.h のリポジトリを移動先のディレクトリでcloneします。

ルートディレクトリまで戻ります。（webpack.config.jsファイルがあるディレクトリまで）

-----------------
$ yarn install

$ yarn run start
------------------

正常に起動すると　'http://localhosst:8003' に自動でページが表示されます。

管理画面へは　'http://localhost:8003/wp-admin/index.php' からログインしてください。

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
ユーザー名：higashitaniyu@crunchtimer.jp
パスワード：&&4NdJD3Hu7UR5Hatd
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


* テーマは別リポジトリになっています。上記してあるリポジトリを参照してください。