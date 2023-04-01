import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { IMessage, useSendMessageMutation } from "../api/messageApi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetUsersQuery, useLazyGetUsersQuery } from "../api/usersApi";

type ISendMessageForm = Omit<IMessage, "id" | "sender" | "date">;

export const SendMessageForm: FC = () => {
  const { data } = useGetUsersQuery();
  const [refetchUsers] = useLazyGetUsersQuery();
  const [sendMessage] = useSendMessageMutation();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  const { register, handleSubmit, reset, control } = useForm<ISendMessageForm>({
    defaultValues: { receiver: "", body: "", title: "" },
  });

  const onSubmit: SubmitHandler<ISendMessageForm> = (data) => {
    sendMessage({ ...data, sender: currentUserName });
    reset();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      noValidate
      width="500px"
      height="500px"
      border="1px solid #dbdbdb"
      p="12px"
      bgcolor="white"
      borderRadius="6px"
      position="sticky"
      top="66px"
    >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} width="100%">
          <Controller
            render={({ field: { onChange, value, onBlur } }) => (
              <Autocomplete
                onOpen={() => refetchUsers()}
                freeSolo
                value={value}
                onBlur={onBlur}
                onChange={(event, item) => onChange(item)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="To"
                    color="success"
                    id="fullWidth"
                  />
                )}
                options={data?.map(({ username }) => username) || []}
              />
            )}
            name="receiver"
            control={control}
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("title", { required: true })}
            fullWidth
            label="Tittle"
            color="success"
            id="fullWidth"
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("body", { required: true })}
            label="Message"
            multiline
            color="success"
            minRows={10}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
            color="success"
          >
            Send message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
