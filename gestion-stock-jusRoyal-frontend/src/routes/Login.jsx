import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Connexion";
  });
  return (
    <Stack
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box width={400} minHeight={300} bgcolor={"white"} p={5}>
        <h1>Connexion</h1>
        <form>
          <Box
            mt={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Nom utilisateur"
              variant="outlined"
              placeholder="tacite"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Mot de passe"
              variant="outlined"
              placeholder="********"
              fullWidth
              type="password"
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: "100%",
              height: "3rem",
              "&:hover": {
                backgroundColor: "#4e78cb",
                color: "white",
              },
            }}
          >
            Se connecter
          </Button>
        </form>
      </Box>
    </Stack>
  );
}
