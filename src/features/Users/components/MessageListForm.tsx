import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Paper, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useGetMessagesQuery } from "../api/messageApi";

export default function MessageListForm() {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const { currentUserName } = useSelector((state: RootState) => state.app);
  const { data } = useGetMessagesQuery(currentUserName, {
    pollingInterval: 5000,
  });

  return (
    <Paper
      sx={{
        padding: "12px",
        gap: "10px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        minWidth: 1100,
      }}
    >
      {data?.map((message) => (
        <Paper key={message.id} variant="outlined">
          <Stack>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                bgcolor: "background.paper",
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 2,
                paddingBottom: 2,
                minWidth: 400,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                  bgcolor: "background.paper",
                }}
              >
                <Avatar {...stringAvatar(message.sender)} />
                <Typography fontWeight={400} fontSize="16px">
                  {message.sender}
                </Typography>
                <Typography color="gray" fontSize="12px">
                  {message.date}
                </Typography>
              </Box>
              <Accordion
                expanded={expanded === message.id}
                onChange={handleChange(message.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={message.id}
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      color: "text.secondary",
                    }}
                  >
                    Tittle:
                  </Typography>
                  <Typography>{message.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      color: "text.secondary",
                    }}
                  >
                    message:
                  </Typography>
                  <Typography>{message.body}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Paper>
  );
}
