'use strict';
/* global shoppingList, cuid */

const Item = (function () {

  function validateName(name) {
    if (!name || name === '') {    // if name doesn't exist
      throw new TypeError('Name does not exist');
    }
  }  
  function create(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  }

  return {  
    validateName: validateName,
    create: create
  };
}());

