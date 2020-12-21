import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

import ModalConfirm from "../modal-confirm/ModalConfirm";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default function RowTable({ row }) {
  const [state, setState] = useState(row.in_maintenance);
  const [showModal, setShowModal] = useState(false);
  const handleChange = (event) => {
    console.log("handleChange");
    const checked = event.target.checked;
    setState(checked);
    if (checked) {
      setShowModal(true);
    }
  };
  const handleCancel = () => {
    setState(false);
    setShowModal(false);
  };
  return (
    <>
      <StyledTableRow key={row._id}>
        <StyledTableCell component="th" scope="row">
          {row.custom_id}
        </StyledTableCell>
        <StyledTableCell align="left">
          <img src={row.image} alt="car-pic" />
        </StyledTableCell>
        <StyledTableCell>{row.brand}</StyledTableCell>
        <StyledTableCell>{row.sub_brand}</StyledTableCell>
        <StyledTableCell>{row.km}</StyledTableCell>
        <StyledTableCell>{row.description}</StyledTableCell>
        <StyledTableCell>
          <Switch
            checked={state}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {state ? "YES" : "NO"}
        </StyledTableCell>
      </StyledTableRow>
      {showModal && (
        <ModalConfirm
          id={row._id}
          handleCancel={handleCancel}
          ok={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}
