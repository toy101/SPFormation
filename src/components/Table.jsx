import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';

import AddDialog from "./AddDialog";
import getStageJson from "../utils/getStages";
import getWeaponJson from "../utils/getWeapons";

function createData(stage, weapon) {
  return {stage, weapon};
}

const initRows = [
  createData("Bバスパーク", "ジェットスイーパーカスタム"),
  createData("エンガワ河川敷", "キャンピングシェルターカーモ"),
  createData("バッテラストリート", "スパイガジェット")
]

const useStyles = {
  table: {
    minWidth: 650,
  },
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 20
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class DenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: initRows,
      stageJSON: getStageJson(),
      weaponJSON: getWeaponJson()
    }
    this.addNew = this.addNew.bind(this)
  }

  addNew(data) {

    let preRows = this.state.rows.slice();

    this.setState({
      rows: preRows.concat([
        createData(data.stage, data.weapon)
      ])
    });

    // console.log(this.state.rows);
  }

  render(){

    const classes = this.props.classes;

    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ステージ</StyledTableCell>
                <StyledTableCell>ブキ</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(this.state.rows || []).map((row) => (
                <StyledTableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.stage}
                  </TableCell>
                  <TableCell>{row.weapon}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddDialog addFn={ this.addNew } stages = { this.state.stageJSON } weapons = { this.state.weaponJSON }/>
      </React.Fragment>
    );
  }
}

DenseTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(DenseTable);