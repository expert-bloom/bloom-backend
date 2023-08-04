async function me() {
  return {
    name: 'John Doe',
    email: '',
  };
}

const account = {
  me,
};

export default account;
