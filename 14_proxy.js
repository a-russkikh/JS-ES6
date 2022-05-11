const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Line ${prop}is not in the object`;
  },
  set(target, propp, value) {
    if (value.length > 2) {
      Reflect.set(targer, prop, value);
    } else {
      console.log(
        "Length should be more than 2 symbols. Not it`s value.length"
      );
    }
  },
};
const form = {
  login: "tester",
  password: "12345",
};
const formProxy = new Proxy(form, validator);
// console.log(formProxy.login);
// console.log(formProxy.password);
// console.log(formProxy["username"]);

// formProxy.password = "12";
// console.log(formProxy.password);

function log(message) {
  console.log("[Log]: ", message);
}
const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.log("Amount of arguments are not the same");
    }
  },
});

proxy("Custom message");
proxy("Message", 2);
