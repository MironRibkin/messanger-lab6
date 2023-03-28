import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMore } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";

export default function MessageListForm() {
  return (
    <Paper
      sx={{
        padding: "12px",
        gap: "10px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        minWidth: 1000,
      }}
    >
      <Paper variant="outlined">
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "background.paper",
              boxShadow: 1,
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 2,
              paddingBottom: 2,
              minWidth: 300,
            }}
          >
            <Typography fontWeight={600} fontSize="18px">
              Кто отправил
            </Typography>
            <Typography color="gray" fontSize="12px">
              Время отправки
            </Typography>
          </Box>
          <Accordion disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight={550} fontSize="14px">
                Тема:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>сообщение:</Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Paper>
    </Paper>
  );
}
