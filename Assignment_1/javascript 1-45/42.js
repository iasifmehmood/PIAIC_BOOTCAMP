/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
 prints the name of each magician in the array. */

const magician_names = ["HAMZA", "UMER", "DANIYAL", "ZIA", "WAJID"];
make_great(magician_names);

function make_great(magicianNames) {
  magicianNames.forEach((element, index) => {
    magicianNames[index] = "Great! " + element;
  });
  console.log(magicianNames);
}

console.log(magician_names); // original array modified
