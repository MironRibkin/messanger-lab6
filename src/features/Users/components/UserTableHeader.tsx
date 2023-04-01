import { Button, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
// import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setCurrentUserName } from "../../../slice/appSlice";

// interface IUsersTableHeaderProps {
//   numSelected: number;
//   onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
//   rowCount: number;
// }

export const UsersTableHeader: FC = () => {
  const dispatch = useDispatch();
  const { currentUserName } = useSelector((state: RootState) => state.app);
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
        {currentUserName}
      </Typography>
      <Button
        color={"error"}
        onClick={() => {
          navigate("/login");
          dispatch(setCurrentUserName(""));
        }}
      >
        LOG OUT
      </Button>
    </Stack>
  );
};
