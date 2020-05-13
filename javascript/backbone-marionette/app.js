'use strict';

/*
 *  TODO: 非同期でデータ取得中Loading画面にする
 *  TODO: 表示件数が○件以上のとき親要素にクラス付与する
 *  TODO: ↓の方法以外で綺麗にHTMLかく方法調べる
 *        - templateをjs側に直書きしない
 *        - 別のtemplateファイル読み込まない
 *        - HTML内で<script type="text/template">タグ使わない
 */

// View
const MyItemView = Backbone.Marionette.ItemView.extend({
    initialize: () => {
        console.log('MyItemViewのinitializeを実行')
    },
    onBeforeShow: () => {
        console.log('MyItemViewのonBeforeShowを実行')
    },
    // Region.showで実行される
    onShow: () => {
        console.log('MyItemViewのonShowを実行')
    },
    // renderで実行される
    onRender: () => {
        console.log('MyItemViewのonRenderを実行')
    }
});

// CollectionView
const MyCollectionView = Backbone.Marionette.CollectionView.extend({
    initialize: () => {
        console.log('MyCollectionViewのinitializeを実行')
    },
    // テンプレート内でChildViewを設置する要素のセレクターを登録
    regions: {
    },
    // renderで実行される
    onRender: () => {
        console.log('MyCollectionViewのonRenderを実行')
    }
});

// Model
const Person = Backbone.Model.extend({
    defaults: {
        members: [
            'yai',
            'mike',
            'sally',
            'boo'
        ]
    }
});
   
const person = new Person();
const myItemView = new MyItemView({
    model: person
});
const myCollectionView = new MyCollectionView();
myCollectionView.render()
