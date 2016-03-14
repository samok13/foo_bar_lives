// Your Code Here!

// ### Features:

// 1. Add a grocery item via a form
// 1. Remove a grocery item via a delete button next to the item in the list
// 1. If the value submitted by the form is empty, do NOT create an item in the list

//form




function addItem(item){
  var $listitem = $('<li>' + item + '</li>')
  var $button = $('<button>Delete</button>')
  $listitem.append($button);
  $('#list').append($listitem);

  $button.on("click", function(event){
    $listitem.remove();
  })

}

$('form').on('submit', function(event){
  event.preventDefault();
  var item = $('#item').val();

  if(item){
    addItem(item);
  }
});


