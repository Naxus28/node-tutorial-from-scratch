const users = require('../data/users');

const getByGender = () => {
  let males = [];
  let females = [];

  users.forEach(person => {
    if (person.gender === 'male') {
      males.push(person);
    } else {
      females.push(person);
    }
  });

  return {
    males,
    females
  }
};

const filterBy = (filter) => {
  let isMultiple = Object.keys(filter).length > 1;
  let filterKeys = Object.keys(filter);

  if (!isMultiple) {
    let key = filterKeys[0];
    return users.filter(person => person[key] === filter[key]);
  } else {
    let filterMultiple = (person) => {
      let matchCount = 0;

      for(key in person) {
        if (person[key] === filter[key]) {
          matchCount++;
        }
      }
      return matchCount === filterKeys.length;
    };

    return users.filter(person => filterMultiple(person));
  }
};

const countBy = (filter) => {
  let users = filterBy(filter);
  return users && users.length || 0;
};

module.exports = {
  getByGender,
  filterBy,
  countBy
};




