import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginUserMutation } from "../api/usersApi";
import { useDispatch } from "react-redux";
import { setCurrentUserName } from "../../../slice/appSlice";

export interface ILoginForm {
  name: string;
}

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = async (payload) => {
    if (value.trim().length > 0) {
      dispatch(setCurrentUserName(payload.name));
      loginUser({ name: payload.name }).then(() => navigate("/home"));
    }
  };
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
          Hello
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
            onChange={({ target: { value } }) => setValue(value)}
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
