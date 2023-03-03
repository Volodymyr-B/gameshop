import { FC } from "react";
import { validationSchema } from "../../utils/validation-schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@mui/material";

interface FormProps {
  title: string;
  clickHandler: (email: string, password: string) => void;
}
interface RegistrationFields {
  email: string;
  password: string;
}

export const Form: FC<FormProps> = ({ title, clickHandler }) => {
  const { register, handleSubmit, formState, getValues } =
    useForm<RegistrationFields>({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: yupResolver(validationSchema),
    });

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        className="flex flex-col gap-4 max-w-md w-full"
        onSubmit={handleSubmit(() =>
          clickHandler(getValues().email, getValues().password)
        )}
      >
        <Typography variant="h4" color="#1976d2" className="text-center mb-4">
          Fill the form
        </Typography>
        <TextField
          label="Email"
          helperText={formState.errors.email?.message || " "}
          {...register("email")}
        />
        <TextField
          label="Password"
          helperText={formState.errors.password?.message || " "}
          {...register("password")}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={formState.isSubmitting}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};
