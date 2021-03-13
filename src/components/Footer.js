import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = { appBar: { top: "auto", bottom: 0, padding: "5px 10px", color: "inherit" }, text: { flexGrow: 1 } }

function Footer() {
  return (
    <footer className="App-footer">
      <AppBar position="fixed" style={styles.appBar}>
        <Typography style={styles.text}>
          Created on Earth🌍 by <Link color="inherit" href="https://github.com/Pachciar3">human</Link>
        </Typography>
      </AppBar>
    </footer>
  )
}

export default Footer;