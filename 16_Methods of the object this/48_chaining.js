// There is an object ladderthat allows you to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // muestra el peldaño actual
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence we can do something like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code for “top” up, “bottom” downand “show rung” showStepto make the calls chainable like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such an approach is widely used among JavaScript libraries.

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // muestra el peldaño actual
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0