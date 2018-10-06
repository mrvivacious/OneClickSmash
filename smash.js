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

  // Initialize a new instance of Particles to disintegrate/integrate the button
        var particles = new Particles('.button');
        console.log("ONE")
        // Disintegrate the button into particles
        particles.disintegrate();
        console.log("TWO")

  alert(this);
});
