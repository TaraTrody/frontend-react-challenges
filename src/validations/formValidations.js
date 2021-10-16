export const validation = {
  validations: {
    firstName: {
      required: {
        value: true,
        message: "First Name cannot be empty",
      },
      pattern: {
        value: "^[A-Za-z]*$",
        message: "Only letters allowed",
      },
    },
    lastName: {
      required: {
        value: true,
        message: "Last Name cannot be empty",
      },
      pattern: {
        value: "^[A-Za-z]*$",
        message: "Only letters allowed",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email cannot be empty",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Looks like this is not an email",
      },
    },
    password: {
      required: {
        value: true,
        message: "Password cannot be empty",
      },
      custom: {
        isValid: (value) => (value === undefined ? false : value.length >= 8),
        message: "Password needs to be at least 8 characters",
      },
    },
  },
  onSubmit: () => {
    alert("User submitted");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  },
};
