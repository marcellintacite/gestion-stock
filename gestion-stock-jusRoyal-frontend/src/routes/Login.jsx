import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  useEffect(() => {
    document.title = "Connexion";
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("username")}
            />
            <TextField
              id="outlined-basic"
              label="Mot de passe"
              variant="outlined"
              placeholder="********"
              fullWidth
              type="password"
              {...register("password")}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
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
