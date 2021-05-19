import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class InputFrom extends Component {
  render(){
    return (
      <div>
        <h2>新規入力</h2>
        <Box m={1} pt={1}>
          <Link to='/'>
            <Button variant="outlined" color="secondary">
              CANCEL
            </Button>
          </Link>
        </Box>
      </div>
    );
  }
}

export default InputFrom;