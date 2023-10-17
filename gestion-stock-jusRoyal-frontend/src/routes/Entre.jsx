import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import FullScreenDialog from "../components/AjouterOperation";

export default function Entre() {
  return (
    <Box>
      <Stack justifyContent={"space-between"} flexDirection={"row"}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Gestion d'entrée en stock
        </Typography>
        <FullScreenDialog />
      </Stack>
      <Box mt={5}>
        <Table />
      </Box>
    </Box>
  );
}
