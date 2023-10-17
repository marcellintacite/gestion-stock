import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

export default function Layout() {
  return (
    <Stack>
      <NavBar />
      <Box
        mx={{
          xs: 1,
          sm: 2,
          md: 30,
          lg: 30,
          xl: 30,
        }}
        pb={10}
        mt={5}
      >
        <Outlet />
      </Box>
    </Stack>
  );
}
