import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ajouter une opération
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Opération de stock
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Enreigistrer
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          mx={{
            xs: 1,
            sm: 2,
            md: 30,
            lg: 30,
            xl: 30,
          }}
          width={{
            xs: "100%",
            sm: "100%",
            md: 350,
            lg: 400,
            xl: 500,
          }}
          mt={5}
          pb={10}
          p={10}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Opération</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={"entre"}>Opération d'entrée</MenuItem>
              <MenuItem value={"sortie"}>Opération de sortie</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Dialog>
    </div>
  );
}
