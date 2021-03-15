import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { useLocation } from "react-router-dom";

const WelcomePage = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  console.log(location.pathname);
  const [isTapped, setTapped] = useState(location.pathname == "/" ? false : true);

  const variants = {
    intitial: { y: 300 },
    onTap: { y: 20 },
  };

  return (
    <Box>
      <Container maxWidth={isTapped ? "xl" : "md"}>
        <TextField
          component={motion.div}
          animate={isTapped ? variants.onTap : variants.intitial} // isTapped ? initial : onTap
          label="Find your applicant!"
          type="search"
          variant="outlined"
          fullWidth={true}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setTapped(true)}
        />
      </Container>
    </Box>
  );
};

export default WelcomePage;
