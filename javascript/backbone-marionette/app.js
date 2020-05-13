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
const MemberView = Backbone.Marionette.ItemView.extend({
    template: '#template',
    initialize: () => {
        console.log('MemberViewのinitializeを実行')
    },
    ui: {
        members: '#members' 
    },
    onBeforeShow: () => {
        console.log('MemberViewのonBeforeShowを実行')
    },
    // RegionでshowされたViewに対して発生
    // 呼ばれるタイミングは、レンダリングされて画面に表示された後
    onShow: () => {
        console.log('MemberViewのonShowを実行')
    },
    // renderで実行される
    onRender: () => {
        console.log('MemberViewのonRenderを実行')
    }
});

// CollectionView
const MembersView = Backbone.Marionette.CollectionView.extend({
    initialize: () => {
        console.log('MembersViewのinitializeを実行')
    },
    // childView: MemberView,
    // テンプレート内でChildViewを設置する要素のセレクターを登録
    regions: {

    },
    onBeforeShow: () => {
        console.log('MembersViewのonBeforeShowを実行')
    },
    // renderで実行される
    onRender: () => {
        const template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    }
});

// Model
const Member = Backbone.Model.extend({
    defaults: {
        name : 'name',
        type: 'monster'
    }
});

// Collection
const Members = Backbone.Collection.extend({ model: Member });

const member = new Member();

const members = new Members([
    {
        name : 'yai',
        type: 'girl'
    },
    {
        name : 'sally',
    },
    {
        name : 'mike',
    },
    {
        name : 'boo',
        type: 'baby'
    },
]);

const memberView = new MemberView({
    model: member
});
memberView.render();

const membersView = new MembersView();
membersView.render()
