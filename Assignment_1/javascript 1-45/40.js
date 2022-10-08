function make_album(artist, title, t = 0) {
  let albumDictionary = {
    Artist: artist,
    Title: title,
    Track: t,
  };
  if (t == 0) {
    delete albumDictionary.Track;
    return albumDictionary;
  } else return albumDictionary;
}

var musicAlbum = make_album("Araf Lohar", "jugni");
console.log(musicAlbum);
musicAlbum = make_album("Ali Azman", "janoon");

console.log(musicAlbum);
musicAlbum = make_album("Asim Azhar", "Coke Studio", "5");
console.log(musicAlbum);

//how to return dict in js

//stackoverflow

/* var myDict = {
    “key1” : “value1”,
    “key2” : “value2”
    };
    function myFunction(dict) {
    var value1 = dict[“key1”];
    var value2 = dict[“key2”];
    }
    myFunction(myDict); */
/* var music_album = {
  album: "asif",
  artist: "mehmood",
};

function make_album(music_album) {
  var value1 = music_album.album;
  var value2 = music_album.artist;
  console.log(value1 + value2);
}

make_album(music_album); */
