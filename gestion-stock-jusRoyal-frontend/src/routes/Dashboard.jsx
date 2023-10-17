import { Box, Stack } from "@mui/material";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import NavBar from "../components/Navbar";
import Bar from "../components/Bar";
import { Link, Outlet } from "react-router-dom";
import BoutonGrand from "../components/BoutonGrand";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <Stack>
      <h1>Dashboard</h1>
      <p>
        Bienvenue sur votre dashboard, {isLoaded ? user.username : "inconnu"}
      </p>
      <Stack
        mt={10}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <BoutonGrand lien={"/entree"} label={"Entrée en stock"} />
        <BoutonGrand lien={"/sortie"} label={"Sortie de stock"} />
        <BoutonGrand lien={"/stock"} label={"Stock"} />
      </Stack>

      <Box mt={4}>
        <Bar />
      </Box>
    </Stack>
  );
}
