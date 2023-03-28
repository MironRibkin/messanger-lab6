import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";

import { ExpandMore } from "@mui/icons-material";

export const Message: FC = () => {
  return (
    <Paper
      sx={{
        padding: "12px",
        gap: "10px",

        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        minWidth: "450px",
      }}
    >
      <Paper variant="outlined">
        <Stack>
          <Box
            display="flex"
            justifyContent="space-between"
            p="6px 24px 0 24px"
          >
            <Typography fontWeight={800} fontSize="16px"></Typography>
            <Typography color="gray" fontSize="12px"></Typography>
          </Box>
          <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={550} fontSize="14px"></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> 123</Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Paper>
    </Paper>
  );
};
