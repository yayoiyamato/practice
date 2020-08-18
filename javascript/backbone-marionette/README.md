# Backbone.js

## Model
 * `constructor(initialize)`
   - インスタンス生成時に実行される
   - 両方定義するとconstructorが実行される
   - DOMと紐付けたい場合はinitializeを使用する
 * `static` プロパティ、メソッド
   - extendの第二引数に渡したオブジェクトが static メンバーになる
   - 第一引数があったら設定されない？
 * `defaults`
   - プロパティのデフォルト値を設定する
   - constructorがあったらdefaultsがきかない？undefinedになる
 * `model.has('propertyName')`
   - プロパティを持ってるかを調べる
   - メソッドの存在は確認できない。
 * `model.unset('propertyName')`
   - プロパティを削除する
   - メソッドには使えない