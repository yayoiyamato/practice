// Setup application
var App = new Backbone.Marionette.Application({
	template: function(selector) {
		return function(data) {
			return _.template($(selector).html(), data);
		};
	}
});

App.addRegions({
	tabContainer: '.tab-container',
	tabContentContainer: '.tab-content-container'
});

/* Tab モデル */
var TabModel = Backbone.Model.extend({
	defaults: {
    tabName: 'tabName',
    isA: true,
    isB: true
	}
})

/* Tab コレクション */
var TabCollection = Backbone.Collection.extend({ model: TabModel})

/* Tab ボタンのアイテムビュー */
var TabItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
	template: _.template('<a href=""><%= tabName %></a>')
})

/* Tab ボタンのコレクションビュー */
var TabCollectionView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'uk-tab tab',
  attributes: {
    'data-uk-tab': "{connect:'.tab-content'}"
  },
  childView: TabItemView
})

/* Tab コンテンツのアイテムビュー */
var TabContentItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
	template: _.template('<%= tabName %> の中身')
})

/* Tab コンテンツのコレクションビュー */
var TabContentCollectionView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'uk-switcher tab-content',
  childView: TabContentItemView
})

App.on("start", function() {
 
  var tabs = [
    {
      tabName: 'tabName1',
      isA: true,
      isB: true
    },
    {
      tabName: 'tabName2',
      isA: false,
      isB: true
    },
  ]
  var tabCollection = new TabCollection(tabs)

  App.tabContainer.show(new TabCollectionView({ collection: tabCollection }))
	App.tabContentContainer.show(new TabContentCollectionView({ collection: tabCollection }))
})

$(function() {
	App.start()
})