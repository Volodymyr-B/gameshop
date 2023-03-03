import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string()
    .required("this field is required")
    .email("please enter valid email")
    .max(30, "30 symbols maximum"),

  password: yup
    .string()
    .required("this field is required")
    .min(6, "6 symbol minimum"),
});
