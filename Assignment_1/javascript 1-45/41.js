/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
 prints the name of each magician in the array. */

const magician_names = ["HAMZA", "UMER", "DANIYAL", "ZIA", "WAJID"];
show_magicians(magician_names);
function show_magicians(magicianNames) {
  for (let x of magicianNames) {
    console.log(x);
  }
}
