const yup = require("yup");

const creatingUserSchema = yup.object({
  body: yup.object({
    username: yup.string().required("Missing username").min(5).max(32),
    password: yup.string().min(5).max(32).required("Missing password"),
  }),
});

const logginInSchema = yup.object({
  body: yup.object({
    username: yup.string().required("Missing username").min(5).max(32),
    password: yup.string().min(5).max(32).required("Missing password"),
  }),
});

const refreshingTokenSchema = yup.object({
  body: yup.object({
    token: yup.string().required("Missing token"),
  }),
});

module.exports = {
  creatingUserSchema,
  logginInSchema,
  refreshingTokenSchema,
};
