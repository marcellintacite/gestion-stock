import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@clerk/clerk-react";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="bla bla bla"
            >
              <Box
                alignItems={"center"}
                width={"100%"}
                px={3}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={2}
              >
                <Link
                  to={"/"}
                  style={{
                    fontSize: 16,
                    textDecoration: "none",
                    color: "#333",
                  }}
                >
                  Tableau de bord
                </Link>
                <Link
                  to={"/entree"}
                  style={{
                    fontSize: 16,
                    textDecoration: "none",
                    color: "#333",
                  }}
                >
                  Gestion d'entrée
                </Link>
                <Link
                  to={"/sorite"}
                  style={{
                    fontSize: 16,
                    textDecoration: "none",
                    color: "#333",
                  }}
                >
                  Gestion des sorties
                </Link>
              </Box>
            </Drawer>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gestion de stock
          </Typography>
          <UserButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
