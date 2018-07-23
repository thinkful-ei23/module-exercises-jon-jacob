'use strict';
/* global shoppingList, cuid */

const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findByID = function(id) {
    items.find(id);  // questionable
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('cannot add item: ' + error.message);
    }
  }

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm
  }; 
}
());
