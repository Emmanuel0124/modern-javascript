/* global moment */

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

// console.log(moment().startOf("day").fromNow());

var endday = moment().endOf('day').fromNow();
console.log(endday);

// console.log(moment().endOf('day').fromNow());