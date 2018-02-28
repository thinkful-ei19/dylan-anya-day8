/* global shoppingList, store, api */
'use strict';
$(document).ready(function() {
  shoppingList.bindEventListeners();  
  shoppingList.render();
  
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));

    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'barfoo' });
    console.log('new name: ' + item.name);

    shoppingList.render();
  });

  
});

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { name: 'foobar', checked: 'foo' }, () => {
//     console.log('updated!');
//   });
// });



