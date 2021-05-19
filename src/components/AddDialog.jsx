import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import AddIcon from '@material-ui/icons/Add';
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default function AddDialog(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line
  const [data, setData] = React.useState({stage: '', weapon: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseWithCancel = () => {
    setOpen(false);
  };

  const handleCloseWithRegister = () => {
    // console.log(data);
    props.addFn(data);
    setOpen(false);
  };

  return (
    <div>
      <Box m={1} pt={1}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleCloseWithCancel} aria-labelledby="form-add-new">
        <DialogTitle id="form-add-new">新規追加</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ステージとそこで使いたいブキを入力するでし！
          </DialogContentText>
          <form className={classes.root} noValidate autoComplete="off">
            <Autocomplete
              onChange={(e, value) => setData({ ...data, stage: value.name})}
              id="auto-comp-stage"
              options={props.stages}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="ステージ" variant="outlined" />}
            />
            <Autocomplete
              onChange={(e, value) => setData({ ...data, weapon: value.name})}
              id="auto-comp-weapon"
              options={props.weapons}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="ブキ" variant="outlined" />}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseWithCancel} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleCloseWithRegister} color="primary">
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}