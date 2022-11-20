

// SelectText
function SelectText(element) {
  var doc = document,
      text = element,
      range, selection;

  if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
      /*
      if(range.toString().length === 0){
        range.moveToElementText(text);
        range.select();
      }
      */
  } else if (window.getSelection) {
      selection = window.getSelection();
      if(selection.toString().length === 0){
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
  }
}

function closeMenu(){
    document.getElementById("mobile-menu").checked = false;

}

// $('.rk-menu__link').on('click', function () {
//     console.log('Hola Manu');
// });
// $('.rk-menu__link a').on('click', function () {
//     console.log('Hola Manu');
// });

// $(document).ready(function() {
//     $(".rk-menu__link").click(function() {
//         //Do stuff when clicked
//         console.log('este si');
//     });
// });