import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <footer>
      <AppBar position="fixed" style={{ top: "auto", bottom: 0, padding: "5px 10px", color: "inherit" }}>

        <Typography style={{ flexGrow: 1 }}>
          Created on Earth🌍 by <Link color="inherit" href="https://github.com/Pachciar3">human</Link>
        </Typography>
      </AppBar>
    </footer>
  )
}

export default Footer;