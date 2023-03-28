import { Box, Button, Grid, TextField } from "@mui/material";
import { FC } from "react";

export const SendMessageForm: FC = () => {
  return (
    <Box
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
          <TextField fullWidth label="From" color="success" id="fullWidth" />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField fullWidth label="Tittle" color="success" id="fullWidth" />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
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
