
const buildMakePerson = ({ getId, getAge }) => {
  return (buildPerson = ({ name, birthdate }) => {
    return {
      id: getId(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  });
};

module.exports = {
  buildMakePerson,
};
