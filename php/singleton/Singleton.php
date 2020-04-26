<?php

/**
 * Singleton：
 * あるクラスに対してインスタンスが1つしか存在しないことを保証し、
 * それにアクセスするためのグローバルな方法を提供する。
 * （GetInstanceメソッドの処理を変更すれば2つ以上も可能）
 *
 * ① コンストラクタを private として宣言
 *    → Singletonクラス以外からのインスタンス化を制御
 * ② Singletonクラスをインスタンス化するgetInstanceメソッドを用意する
 *    → Singletonクラスをインスタンス化できるのを、
 *      SingletonクラスのgetInstanceメソッドだけに限定
 * ③ __cloneメソッドでコピーの作成を制御
 *
 */

class Singleton
{
    /**
     * メンバー変数
     */
    private $name;

    /**
     * インスタンスを保持する変数
     */
    private static $instance;

    /**
     * コンストラクタ
     */
    private function __construct()
    {
        $this->name = 'yayoi';
        echo "Singleton のコンストラクタを実行 !<br>";
    }

    /**
     * インスタンスを返す
     * @return Singletonインスタンス
     */
    public static function getInstance() {
        if (!isset(self::$instance)) {
            self::$instance = new Singleton();
            echo 'Singleton のインスタンス作成 !<br>';
        }
        return self::$instance;
    }

    /**
     * 名前を返す
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * このインスタンスの複製を許可しないようにする
     * @throws RuntimeException
     */
    public final function __clone() {
        throw new RuntimeException ('Clone is not allowed against ' . get_class($this));
    }

}