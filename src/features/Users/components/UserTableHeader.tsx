import { Button, Stack, Typography } from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";

interface IUsersTableHeaderProps {
  numSelected: number;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

export const UsersTableHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <Stack
      height="70px"
      alignItems="center"
      justifyContent="space-between"
      p="5px 10px"
      direction="row"
      borderBottom="1px solid #dbdbdb"
      bgcolor="white"
      position="sticky"
      top="0"
    >
      <Typography variant="h6" color="success">
        MIRON
      </Typography>
      <Button color={"error"} onClick={() => navigate("/login")}>
        LOG OUT
      </Button>
    </Stack>
  );
};
