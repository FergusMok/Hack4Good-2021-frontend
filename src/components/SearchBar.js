import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useLocation, useHistory } from "react-router-dom";

const WelcomePage = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const [isTapped, setTapped] = useState(location.pathname == "/" ? false : true);

  const variants = {
    intitial: { y: 300 },
    onTap: { y: 20 },
  };

  const history = useHistory();
  // Pass in the github username
  const onSubmitEvent = (e) => {
    console.log(search);
    history.push("/profile/" + search);
  };

  return (
    <Box>
      <Container maxWidth={isTapped ? "xl" : "md"}>
        <form onSubmit={(e) => onSubmitEvent(e)}>
          <TextField
            component={motion.div}
            animate={isTapped ? variants.onTap : variants.intitial} // isTapped ? initial : onTap
            label="Search your applicant via Github username!"
            type="search"
            variant="outlined"
            fullWidth={true}
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setTapped(true)}
          />
        </form>
      </Container>
    </Box>
  );
};

export default WelcomePage;
