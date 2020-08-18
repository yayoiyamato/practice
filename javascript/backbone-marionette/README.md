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
 * `model.attributes`
   - プロパティを全て取得する
   - このオブジェクトの値を変更すると、元のインスタンスのプロパティも書き換わる
 * `model.toJSON()`
   - 元のインスタンスが持つ attributes のコピーを取得する
   - このオブジェクトのプロパティを変更しても、元のインスタンスには**影響を与えない**
   - **プロパティがオブジェクトの場合は、変更すると元のインスタンスのプロパティも書き換わる**（そのオブジェクトは元のインスタンスも参照しているため）
 * `validate`
   - 引数に全プロパティをもつオブジェクトが渡される
   - エラーが無い場合は、何も返さないようにする
   - エラーが有る場合は、エラー情報を持つ任意の値を返す
   - isValid() メソッドを実行すると実行され、エラーの有無が boolean で返される（エラーなし = true）
   - validate()メソッドが返したエラー情報は、 validationError プロパティに保存される
