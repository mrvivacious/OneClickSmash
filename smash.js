// smash.js

//
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     this.css({
//       'background-color' : 'DeepPink'
//     });
//
//     alert(this);
//   });
// }

$(document).on("click", "button", function() {
  $(this).css({
    'background-color' : 'DeepPink',
    'background-image' : 'none'

  });
  console.log(this);

  alert(this);
});
