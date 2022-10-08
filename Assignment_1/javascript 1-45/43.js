const magician_names = ["HAMZA", "UMER", "DANIYAL", "ZIA", "WAJID"];
make_great(magician_names);

function make_great(magicianNames) {
  const great_magicians = magicianNames.slice(); //created copy of an array
  great_magicians.forEach((element, index) => {
    great_magicians[index] = "Great! " + element;
  });
  console.log(great_magicians);
}

console.log(magician_names);
