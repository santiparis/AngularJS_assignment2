(function () {
'use strict';

	angular.module('ShoppingListApp', [])
	.controller('ToBuyListController', ToBuyListController)
	.controller('AlreadyBoughtListController', AlreadyBoughtListController)
	.service('ShoppingList', ShoppingListService);


	ToBuyListController.$inject = ['ShoppingList'];

	function ToBuyListController(ShoppingList) {
		let list1 = this;

		list1.items = ShoppingList.getToBuyItems();

		list1.checkItem = function(itemIndex) {
			ShoppingList.checkItem(itemIndex);
		};
	}

	AlreadyBoughtListController.$inject = ['ShoppingList'];

	function AlreadyBoughtListController(ShoppingList) {
		let list2 = this;

		list2.items = ShoppingList.getBoughtItems();
	}

	function ShoppingListService() {
		let service = this;

		let toBuyItems = [

		{name: 'cookies',
		quantity: 10},

		{name: 'cookies',
		quantity: 10},

		{name: 'cookies',
		quantity: 10},

		{name: 'cookies',
		quantity: 10},

		{name: 'cookies',
		quantity: 10}
		];

		let boughtItems = [];

		service.getToBuyItems = function() {
			return toBuyItems;
		};

		service.getBoughtItems = function() {
			return boughtItems;
		};

		service.checkItem = function(itemIndex) {
			let boughtItem = toBuyItems.splice(itemIndex, 1);
			boughtItems.push(boughtItem[0]);
		};
	}
})();