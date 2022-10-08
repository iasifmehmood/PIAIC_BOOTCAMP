//arbitary={} for taking argument from make_mode_car func

function make_model_car(manufacturer, model, arbitary = {}) {
  car_info = {
    manufacturer: manufacturer,
    model: model,
  };
  for (const [x, value] of Object.entries(arbitary)) {
    car_info[x] = value;
  }

  return car_info;
}

var car_obj = make_model_car("honada", "accord", {
  color: "red",
});

console.log(car_obj);

// use {key:property} to pass arguments
car_obj = make_model_car("honada", "accord", {
  color: "red",
  speed: 125,
  gear: "automatic",
});

console.log(car_obj);
