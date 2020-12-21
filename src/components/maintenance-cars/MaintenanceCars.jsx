import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import RowTable from "./RowTable";
import { getAllCars } from "../../services/cars";
import "./styles.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function MaintenanceCars() {
  const classes = useStyles();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllCars();
      console.log(resp);
      setCars([...resp.cars]);
    };
    fetchData();
  }, []);

  return (
    <div className="table-wrapper">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Custom id</StyledTableCell>
              <StyledTableCell align="left">Image</StyledTableCell>
              <StyledTableCell>Brand</StyledTableCell>
              <StyledTableCell>Subbrand</StyledTableCell>
              <StyledTableCell>KM</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Maintenance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((row) => (
              <RowTable row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MaintenanceCars;
