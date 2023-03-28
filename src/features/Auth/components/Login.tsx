import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../api/authApi";

export interface ILoginForm {
  name: string;
}

export const Login: FC = () => {
  const [login, { data }] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = async (payload) => {
    login(payload);
  };

  useEffect(() => {
    if (data?.name) {
      console.log(data.name);
      localStorage.setItem("name", data.name ?? "");
      navigate("/home", { replace: true });
    }
  }, [data?.name]);

  return (
    <Container component="main" maxWidth="xs">
      <Stack
        direction="column"
        m="auto"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component="h1" variant="h5">
          Name
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            {...register("name", {
              required: true,
            })}
            required
            fullWidth
            label="Enter your name"
            color="success"
            error={!!errors?.name}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="success"
          >
            Sign In
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
