import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";
import Container from "@material-ui/core/Container";

const WelcomePage = () => {
  const [search, setSearch] = useState("");
  const [isTapped, setTapped] = useState(false);
  //console.log(search);
  console.log(isTapped);

  const variants = {
    intitial: { y: 300 },
    onTap: { y: 20 },
  };

  return (
    <>
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
    </>
  );
};

/*

      <motion.div
        animate={isTapped ? "onTap" : "initial"}
        variants={variants}
        onClick={() => setTapped(true)}
        className="animateSearchBar"
      >
        <TextField
          inputProps={{ className: animateSearchBar }}
          label="Search field"
          type="search"
          variant="outlined"
          fullWidth={true}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

*/

export default WelcomePage;
