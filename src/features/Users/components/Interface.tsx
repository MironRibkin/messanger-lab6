import React, { FC } from "react";
import { Box, Stack } from "@mui/material";
import { UsersTableHeader } from "./UserTableHeader";
import MessageListForm from "./MessageListForm";
import { SendMessageForm } from "./SendMessageForm";

export const Interface: FC = () => {
  return (
    <Box height="100vh">
      <UsersTableHeader />
      <Stack
        direction="row-reverse"
        justifyContent="space-between"
        p="20px 80px"
      >
        <SendMessageForm />
        <MessageListForm />
      </Stack>
    </Box>
  );
};
