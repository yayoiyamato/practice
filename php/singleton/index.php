<?php

require_once 'Singleton.php';

/* インスタンスを2つ取得する */
$instance1 = Singleton::getInstance();
$instance2 = Singleton::getInstance();
echo '<hr>';

/* 2つのインスタンスの getName() の返り値が同一かどうかを確認する */
echo 'instance1 のgetName(): ' . $instance1->getName() . '<br>';
echo 'instance2 のgetName(): ' . $instance2->getName() . '<br>';
echo '$instance1->getName() === $instance2->getName() : ' . ($instance1->getName() === $instance2->getName() ? 'true' : 'false');
echo '<hr>';

/* 2つのインスタンスが同一かどうかを確認する */
echo '$instance1 === $instance2 : ' . ($instance1 === $instance2 ? 'true' : 'false');
echo '<hr>';

/* 直接インスタンス化できないことを確認する */
$instance3 = new Singleton();

/* 複製できないことを確認する */
$instance4 = clone $instance1;


