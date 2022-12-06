import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import "./TextFiledCustom.css";

const CustomTextField = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography marginBottom={"20px"} fontSize={"1.5em"}>
        Custom Border Outlined MUI Textfield
      </Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
};

export default CustomTextField;
