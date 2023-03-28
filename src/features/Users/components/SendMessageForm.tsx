import { Box, Button, Grid, TextField } from "@mui/material";
import { FC } from "react";

export const SendMessageForm: FC = () => {
  return (
    <Box
      component="form"
      noValidate
      width="500px"
      height="450px"
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
          Кому:
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField size="small" fullWidth placeholder="Title" />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField placeholder="Message" multiline minRows={10} fullWidth />
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
