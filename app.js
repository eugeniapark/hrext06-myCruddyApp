$(document).ready(function(){  //when document's ready, run code
  var groceryArr = [];  //array that holds list of groceries, default is empty
  var parsedList = JSON.parse(localStorage.getItem('groceryKey'));  //parsed bc localstorage only

  // checks if there are items in the local storage
  if (localStorage.getItem('groceryKey')) {  //if there are items in the grocery list
    groceryArr = parsedList;  //retrieve from localStorage and set as the grocery list;
  }

  // when an input item is added/"add item" button clicked
  $('.btn-submit').on('click', function(){    // write to local storage from input when add button clicked
    groceryArr.push($('.grocery-item').val());  // adds input item to the grocery array list
    localStorage.setItem('groceryKey', JSON.stringify(groceryArr));  //setItem(key, val) - store groceryArr into localStorage

    $('.list-display-field').append("<li>" + groceryArr.slice(-1) + "</li>");  // appends the item to the DOM (adds item to the botton of the list)
    $('.grocery-item').val('');  //resets input box after new item added/button clicked
  });

  // holds items in list when the page is refreshed
  $('.body').ready(function() {    // when body's ready, run the code
    if (groceryArr.length > 0) {  // if there's items in the array
      for(var i = 0; i < parsedList.length; i++) {  //retrieve the list from localStorage
        $('.list-display-field').append("<li>" + parsedList[i] + "</li>");  //add them to the DOM
      }
    }
  });

  // delete all items from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.clear();   //clears localStorage
    $('li').remove();     //deletes all items from the DOM
  });
});


/* localStorage
 .setItem('key', 'value') - Add key and value to local storage
 .getItem() - retrieve value by key
 .removeItem() - Remove an item by key
 .clear() - Clear all storage
*/