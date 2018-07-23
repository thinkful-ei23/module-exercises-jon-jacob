'use strict';
/* global shoppingList, Item, cuid */

const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    return items.find(x => x.id === id);
    // questionable
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('cannot add item: ' + error.message);
    }
  };

  const findAndToggleChecked = function (id) {
    const test = findById(id);
    test.checked = !test.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName); //validate the name
      const thisItem = findById(id);
      thisItem.name = newName;

    } catch(error) {
      console.log('New name didn\'t work');
    }
  };

  const findAndDelete = function(id){
    this.items = this.items.filter(x => x.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(searchedTerm) {
    // changes this.searchTerm to the first argument passed in
    this.searchTerm = searchedTerm;
  };

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById: findById,
    addItem: addItem,
    findAndToggleChecked: findAndToggleChecked,
    findAndUpdateName: findAndUpdateName,
    findAndDelete: findAndDelete,
    toggleCheckedFilter: toggleCheckedFilter,
    setSearchTerm: setSearchTerm
  }; 
}
());
