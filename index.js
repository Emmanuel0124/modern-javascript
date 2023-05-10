/* global moment */

// var datetime = moment().startOf("day").fromNow();
// console.log(datetime);

// console.log(moment().startOf("day").fromNow());

// var endday = moment().endOf('day').fromNow();
// console.log(endday);

// console.log(moment().endOf('day').fromNow());

// console.log("tessst");

// import moment from 'moment';
// console.log(moment().format());

var bob = {
  _name: "Bob",
  _friends: ["timmy","johnny","bert"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob);