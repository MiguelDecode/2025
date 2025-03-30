interface buildMakePersonProps {
  getId: () => string;
  getAge: (birthdate: string) => number;
}

interface buildPersonProps {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getId, getAge }: buildMakePersonProps) => {
  return ({ name, birthdate }: buildPersonProps) => {
    return {
      id: getId(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};
