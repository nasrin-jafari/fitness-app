import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{
      // gap: {  xs: "40px"  , sm: "123px",},
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    // px="20px"
    // border={1}
  >
    <Link to="/" >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      // gap="40px"
      justifyContent="space-between"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      // border={1}
      width="200px"
      sx={{ml :{ xs :"8px" , sm :"120px"}}}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
