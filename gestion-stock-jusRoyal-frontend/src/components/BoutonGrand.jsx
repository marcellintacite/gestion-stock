import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BoutonGrand({ label, lien }) {
  return (
    <Box
      width={{
        xs: 100,
        sm: 100,
        md: 100,
        lg: 200,
        xl: 200,
      }}
      height={{
        xs: 100,
        sm: 100,
        md: 100,
        lg: 200,
        xl: 200,
      }}
      sx={{
        border: "1px solid black",
        padding: "10px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        borderRadius: "5px",
        color: "white",
        // adding hover
        "&:hover": {
          backgroundColor: "#92b1ef",
          color: "white",
          scale: "1.1",
          transition: "all 0.5s ease",
        },
      }}
    >
      <Link
        to={lien}
        style={{
          textDecoration: "none",
          color: "black",
          padding: "10px",
          "&:hover": {
            color: "white",
          },
        }}
      >
        {label}
      </Link>
    </Box>
  );
}
