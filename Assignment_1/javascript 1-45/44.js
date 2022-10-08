const items = {
  item1: "Boiled egg",
  item2: "vegetable",
  item3: "mayonnaise",
};

// ...item to accept
function sandwith(...item) {
  console.log(item);
}

sandwith(items);
sandwith("chicken", "salad", "potatos");
sandwith("onion", "bread", "Garnish");

/* var myDict = {
    “key1” : “value1”,
    “key2” : “value2”
    };
    function myFunction(dict) {
    var value1 = dict[“key1”];
    var value2 = dict[“key2”];
    }
    myFunction(myDict); */
