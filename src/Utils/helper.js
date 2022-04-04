const validate = (name, email, message) => {
  return {
    name: name.length === 0,
    email: email.length === 0,
    message: message.length === 0,
  };
};


export { validate };
