// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function get_random_int(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// This is not the route to go on the long run. Function isn't 
// pure what makes testing a lot harder. Also has more than one
// responsibility ATM. Just for the sake of prototyping and demo'ing
// this has been added. Also this implementation doesn't garuantee
// list.length / 10 entries in the original list to be replaced since
// Math.random could potentially return the same index multiple times.
exports.replace_random_entries = function(list) {
  const items = Math.floor(list.length / 10) || 1;
  const exclude = Array.from({length: items}, () => get_random_int(list.length));
  exclude.forEach((ex) => list[ex] = ".".repeat(list[ex].length));
  return list;
}
