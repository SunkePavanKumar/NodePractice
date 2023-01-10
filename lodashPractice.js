const _ = require("lodash");
// we can iterate the objects to get the objects of objects
const logger = require("./utilities/appLogger.js");
const arr = {
  1: { name: "Pavan ", age: 21 },
  2: {
    name: "Sai",
    age: 25,
  },
};
const array = [];
_.forEach(arr, (obj, index) => {
  array.push(obj);
  console.log(obj, index);
});
logger.info(`${array}`);
//map function using lodash

const arrObj = [
  { name: "pavan Kumar", age: 21 },
  { name: "Sai", age: 23 },
];

const result = _.map(arrObj, (data) => {
  logger.info(data.name);
  return data.name;
});
logger.info(result);
const users = [
  {
    id: 1,
    first_name: "Pavan Kumar  Sunke",
    status: "Active",
    isAvaliable: true,
  },
  { id: 2, first_name: "Sai Kiran", status: "isinActive", isAvaliable: false },
];

// Manipulating the users Accordingly

const normalization = (users) => {
  return _.map(users, (data) => {
    return {
      id: data.id,
      firstName: data.first_name,
      isActive: data.status === "Active",
    };
  });
};
const res = normalization(users);
console.log(res);

const filres = _.filter(users, (data) => {
  return data.id === 2;
});
const filres1 = _.filter(users, { id: 1 });
console.log(filres1);
console.log(filres);

// search using filter
const search = (users, searchName) => {
  return _.filter(users, (data) => {
    return _.includes(data.first_name, searchName);
  });
};
logger.info();
console.log(search(users, "P"));

// find method

const findres = _.find(users, { id: 1 });
logger.info();
console.log(findres);

// lodash remove the objects from the array

// _.without
const remmData = [1, 2, 34, 56, 5, 4, 3];
const res4 = _.without(remmData, 2, 3, 34);
console.log(res4);

// remove other than the returned data it will remove everything

const remRes = _.remove(users, (data) => {
  return data.isAvaliable === true;
});
console.log(users);
console.log(remRes);

// reject whatever the returned data mapped  it will be removed it will also change the orginal data

const rejRes = _.reject(users, (data) => {
  return data.isAvaliable === true;
});
console.log(rejRes);
// _.every   ==> checks the  user is Active or not  returns the boolean

//_.some
//_.OrderBy
//_.group
